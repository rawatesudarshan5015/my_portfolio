import { POST, escapeHTML } from './route';

jest.mock('resend', () => {
  return {
    Resend: jest.fn().mockImplementation(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({}),
      },
    })),
  };
});

describe('escapeHTML', () => {
  it('escapes ampersand', () => {
    expect(escapeHTML('Tom & Jerry')).toBe('Tom &amp; Jerry');
  });

  it('escapes less than and greater than', () => {
    expect(escapeHTML('<script>')).toBe('&lt;script&gt;');
  });

  it('escapes double and single quotes', () => {
    expect(escapeHTML('"Hello" \'World\'')).toBe('&quot;Hello&quot; &#39;World&#39;');
  });

  it('returns empty string for empty input', () => {
    expect(escapeHTML('')).toBe('');
  });

  it('does not escape safe text', () => {
    expect(escapeHTML('Hello World')).toBe('Hello World');
  });
});

describe('POST', () => {
  const mockJson = jest.fn();
  const mockRequest = {
    json: mockJson,
  } as unknown as Request;

  beforeEach(() => {
    mockJson.mockClear();
  });

  it('returns success for valid input', async () => {
    mockJson.mockResolvedValue({
      name: 'Alice <script>',
      email: 'alice@example.com',
      message: 'Hello!',
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(data.success).toBe(true);
  });

  it('returns failure on error', async () => {
    mockJson.mockRejectedValue(new Error('Bad request'));

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(data.success).toBe(false);
    expect(response.status).toBe(500);
  });
});