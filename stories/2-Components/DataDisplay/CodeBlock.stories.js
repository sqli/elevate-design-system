/**
 * @component CodeBlock
 * @description Syntax-highlighted code block component with SQLI theme
 * @see https://prismjs.com/
 */

// Code examples for different languages
const CODE_EXAMPLES = {
  javascript: `// JavaScript example
function greet(name) {
  const message = \`Hello, \${name}!\`;
  console.log(message);
  return message;
}

greet('SQLI');`,

  typescript: `// TypeScript example
interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = async (id: number): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`,

  php: `<?php
// PHP example
class UserController extends Controller
{
    public function show(int $id): JsonResponse
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
}`,

  java: `// Java example
public class HelloWorld {
    public static void main(String[] args) {
        String name = "SQLI";
        System.out.println("Hello, " + name + "!");
    }
}`,

  csharp: `// C# example
public class UserService
{
    private readonly IUserRepository _repository;

    public async Task<User> GetUserAsync(int id)
    {
        return await _repository.FindByIdAsync(id);
    }
}`,

  python: `# Python example
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence."""
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    return sequence[:n]

print(fibonacci(10))`,

  sql: `-- SQL example
SELECT
    u.id,
    u.name,
    u.email,
    COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
GROUP BY u.id, u.name, u.email
ORDER BY order_count DESC
LIMIT 10;`,

  html: `<!-- HTML example -->
<!DOCTYPE html>
<html lang="en" data-theme="sqli-light">
<head>
    <meta charset="UTF-8">
    <title>SQLI App</title>
</head>
<body>
    <button class="btn btn-primary">
        Click me
    </button>
</body>
</html>`,

  css: `/* CSS example */
.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-primary-content);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
}

.btn-primary:hover {
    background-color: var(--color-primary-focus);
}`,

  bash: `#!/bin/bash
# Bash example

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Done!"`,

  swift: `// Swift example
struct User: Codable {
    let id: Int
    let name: String
    let email: String
}

func fetchUser(id: Int) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}`,

  json: `{
  "name": "@sqli/elevate-design-system",
  "version": "0.5.0-alpha",
  "description": "SQLI Design System",
  "main": "dist/sqli-design-system.css",
  "keywords": ["design-system", "sqli", "daisyui"]
}`,
};

export default {
  title: 'Components/Data Display/Code Block',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Code Block** component for displaying syntax-highlighted code.

## Usage
\`\`\`html
<div class="code-block">
  <div class="code-block-header">
    <span class="code-block-lang">javascript</span>
    <button class="code-block-copy">Copy</button>
  </div>
  <pre class="code-block-content"><code>const x = 1;</code></pre>
</div>
\`\`\`

## Supported Languages
JavaScript, TypeScript, PHP, Java, C#, Python, SQL, HTML, CSS, Bash, Swift, JSON, and more.

## Features
- Syntax highlighting with SQLI theme colors
- Language indicator
- Copy button
- Line numbers (optional)
- Dark mode support
        `,
      },
    },
  },
};

// Helper to escape HTML
const escapeHtml = (str) =>
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Helper to generate code block HTML
const codeBlock = (code, lang, options = {}) => {
  const { showLineNumbers = false, showHeader = true } = options;
  const lines = code.split('\n');
  const lineNumbersHtml = showLineNumbers
    ? `<div class="code-block-lines">${lines.map((_, i) => `<span>${i + 1}</span>`).join('\n')}</div>`
    : '';

  const headerHtml = showHeader
    ? `
    <div class="code-block-header">
      <span class="code-block-lang">${lang}</span>
      <button class="btn btn-ghost btn-xs code-block-copy">Copy</button>
    </div>`
    : '';

  return `
<div class="code-block">
  ${headerHtml}
  <div class="code-block-body ${showLineNumbers ? 'with-lines' : ''}">
    ${lineNumbersHtml}
    <pre class="code-block-content"><code>${escapeHtml(code)}</code></pre>
  </div>
</div>`;
};

export const JavaScript = () => codeBlock(CODE_EXAMPLES.javascript, 'JavaScript');
JavaScript.storyName = 'JavaScript';

export const TypeScript = () => codeBlock(CODE_EXAMPLES.typescript, 'TypeScript');
TypeScript.storyName = 'TypeScript';

export const PHP = () => codeBlock(CODE_EXAMPLES.php, 'PHP');

export const Java = () => codeBlock(CODE_EXAMPLES.java, 'Java');

export const CSharp = () => codeBlock(CODE_EXAMPLES.csharp, 'C#');
CSharp.storyName = 'C#';

export const Python = () => codeBlock(CODE_EXAMPLES.python, 'Python');

export const SQL = () => codeBlock(CODE_EXAMPLES.sql, 'SQL');

export const HTML = () => codeBlock(CODE_EXAMPLES.html, 'HTML');

export const CSS = () => codeBlock(CODE_EXAMPLES.css, 'CSS');

export const Bash = () => codeBlock(CODE_EXAMPLES.bash, 'Bash');

export const Swift = () => codeBlock(CODE_EXAMPLES.swift, 'Swift');

export const JSON = () => codeBlock(CODE_EXAMPLES.json, 'JSON');

export const WithLineNumbers = () =>
  codeBlock(CODE_EXAMPLES.javascript, 'JavaScript', { showLineNumbers: true });
WithLineNumbers.storyName = 'With Line Numbers';

export const Minimal = () => codeBlock(CODE_EXAMPLES.bash, 'Bash', { showHeader: false });
Minimal.storyName = 'Minimal (No Header)';

export const DarkMode = () => `
  <div data-theme="sqli-dark" class="bg-base-100 p-6 rounded-lg">
    <h3 class="text-lg font-medium text-base-content mb-4">Dark Mode (sqli-dark)</h3>
    ${codeBlock(CODE_EXAMPLES.javascript, 'JavaScript')}
  </div>
`;
DarkMode.storyName = 'Dark Mode';
DarkMode.parameters = {
  backgrounds: { default: 'dark' },
};
