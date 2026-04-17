/**
 * @component CodeBlock
 * @description Syntax-highlighted code block with SQLI theme (Catppuccin Mocha).
 *
 * Uses Prism.js for programmatic highlighting. Storybook-only component,
 * not exported from the library.
 *
 * @see https://prismjs.com/
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import { DarkModeWrapper, darkModeParameters } from '../utils/story-helpers';
import './code-block.css';

// =============================================================================
// Types & constants
// =============================================================================

const LANG_LABELS = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  php: 'PHP',
  java: 'Java',
  csharp: 'C#',
  python: 'Python',
  sql: 'SQL',
  html: 'HTML',
  css: 'CSS',
  bash: 'Bash',
  swift: 'Swift',
  json: 'JSON',
} as const;

type SupportedLanguage = keyof typeof LANG_LABELS;

// =============================================================================
// CodeBlock component (Storybook-only)
// =============================================================================

interface CodeBlockProps {
  code: string;
  language: SupportedLanguage;
  showLineNumbers?: boolean;
  showHeader?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = false,
  showHeader = true,
}) => {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const highlighted = useMemo(() => {
    const grammar = Prism.languages[language];
    return grammar
      ? Prism.highlight(code, grammar, language)
      : code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }, [code, language]);

  const lineCount = useMemo(() => code.split('\n').length, [code]);

  useEffect(() => {
    return () => clearTimeout(copyTimerRef.current);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }, () => { /* clipboard unavailable */ });
  }, [code]);

  return (
    <div className="code-block">
      {showHeader && (
        <div className="code-block-header">
          <span className="code-block-lang">{LANG_LABELS[language]}</span>
          <button className="code-block-copy" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <div className="code-block-body">
        {showLineNumbers && (
          <div className="code-block-lines">
            {Array.from({ length: lineCount }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
        )}
        <pre className="code-block-content">
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
};

// =============================================================================
// Code examples
// =============================================================================

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
  "version": "0.12.0-alpha",
  "description": "React component library for SQLI applications",
  "keywords": ["design-system", "sqli", "radix-ui", "tailwind"]
}`,
};

// =============================================================================
// Story meta
// =============================================================================

const meta: Meta = {
  title: 'SpecificComponents/Code Block',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Code Block** component for displaying syntax-highlighted code using [Prism.js](https://prismjs.com/).

## Features
- Syntax highlighting with SQLI-branded Catppuccin Mocha theme
- 12 languages supported (JS, TS, PHP, Java, C#, Python, SQL, HTML, CSS, Bash, Swift, JSON)
- Copy-to-clipboard button
- Optional line numbers
- Dark mode compatible
        `,
      },
    },
  },
};

export default meta;

// =============================================================================
// Stories
// =============================================================================

export const JavaScript = () => (
  <CodeBlock code={CODE_EXAMPLES.javascript} language="javascript" />
);

export const TypeScript = () => (
  <CodeBlock code={CODE_EXAMPLES.typescript} language="typescript" />
);

export const PHP = () => <CodeBlock code={CODE_EXAMPLES.php} language="php" />;

export const Java = () => <CodeBlock code={CODE_EXAMPLES.java} language="java" />;

export const CSharp = () => <CodeBlock code={CODE_EXAMPLES.csharp} language="csharp" />;
CSharp.storyName = 'C#';

export const Python = () => <CodeBlock code={CODE_EXAMPLES.python} language="python" />;

export const SQL = () => <CodeBlock code={CODE_EXAMPLES.sql} language="sql" />;

export const HTML = () => <CodeBlock code={CODE_EXAMPLES.html} language="html" />;

export const CSS = () => <CodeBlock code={CODE_EXAMPLES.css} language="css" />;

export const Bash = () => <CodeBlock code={CODE_EXAMPLES.bash} language="bash" />;

export const Swift = () => <CodeBlock code={CODE_EXAMPLES.swift} language="swift" />;

export const JSON_Example = () => <CodeBlock code={CODE_EXAMPLES.json} language="json" />;
JSON_Example.storyName = 'JSON';

export const WithLineNumbers = () => (
  <CodeBlock code={CODE_EXAMPLES.typescript} language="typescript" showLineNumbers />
);
WithLineNumbers.storyName = 'With Line Numbers';

export const Minimal = () => (
  <CodeBlock code={CODE_EXAMPLES.bash} language="bash" showHeader={false} />
);
Minimal.storyName = 'Minimal (No Header)';

export const DarkMode = () => (
  <DarkModeWrapper>
    <div className="space-y-4">
      <CodeBlock code={CODE_EXAMPLES.javascript} language="javascript" />
      <CodeBlock code={CODE_EXAMPLES.python} language="python" showLineNumbers />
    </div>
  </DarkModeWrapper>
);
DarkMode.parameters = darkModeParameters;
