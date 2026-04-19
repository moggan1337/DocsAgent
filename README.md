# DocsAgent 📝

> A powerful documentation generator for modern JavaScript/TypeScript projects. Automatically generate professional README files, changelogs, and API documentation with a simple command-line interface.

[![npm version](https://img.shields.io/npm/v/docsagent.svg)](https://www.npmjs.com/package/docsagent)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/moggan1337/DocsAgent/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Last Updated](https://img.shields.io/badge/last%20updated-April%202026-blue)](https://github.com/moggan1337/DocsAgent/commits/main)

---

## 📋 Table of Contents

- [DocsAgent 📝](#docsagent-)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Quick Start](#-quick-start)
  - [📦 Installation](#-installation)
  - [🎯 Usage](#-usage)
    - [CLI Usage](#cli-usage)
    - [Programmatic Usage](#programmatic-usage)
    - [Configuration File](#configuration-file)
  - [📚 API Reference](#-api-reference)
    - [DocsGenerator Class](#docsgenerator-class)
    - [Methods](#methods)
      - [generateReadme()](#generatereadme)
      - [generateChangelog()](#generatechangelog)
      - [generateAPI()](#generateapi)
    - [Configuration Options](#configuration-options)
  - [⚙️ Advanced Configuration](#️-advanced-configuration)
    - [Custom Templates](#custom-templates)
    - [Theme Options](#theme-options)
    - [Output Formats](#output-formats)
  - [🛠️ CLI Commands](#️-cli-commands)
  - [📝 Example Output](#-example-output)
  - [🔧 Development](#-development)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)
  - [🔗 Related Links](#-related-links)

---

## ✨ Features

DocsAgent provides a comprehensive set of features for documentation generation:

| Feature | Description |
|---------|-------------|
| **📄 README Generation** | Automatically generate beautiful README files from configuration |
| **📋 Changelog Management** | Keep track of project versions and changes with auto-generated changelogs |
| **📚 API Documentation** | Generate API reference documentation from source code |
| **🎨 Customizable Templates** | Use built-in templates or create your own |
| **⚡ Fast & Lightweight** | Minimal dependencies, maximum performance |
| **🔗 TypeScript Native** | Full TypeScript support with type definitions |
| **📁 Multi-Format Output** | Support for Markdown, HTML, and JSON output |
| **🎯 Zero Configuration** | Works out of the box with sensible defaults |
| **🔄 Auto-Updates** | Intelligent change detection and documentation updates |
| **🌐 Cross-Platform** | Works on macOS, Linux, and Windows |

### Key Benefits

- **🚀 Time Savings**: Generate documentation in seconds instead of hours
- **🎯 Consistency**: Ensure consistent documentation across your projects
- **💎 Quality**: Professional-looking docs that impress your users
- **🔧 Maintainability**: Easy to update documentation as your project evolves
- **📊 Analytics**: Track documentation coverage and completeness

---

## 🚀 Quick Start

Get up and running with DocsAgent in under a minute!

### 1. Install DocsAgent

```bash
# Using npm
npm install -g docsagent

# Using yarn
yarn global add docsagent

# Using pnpm
pnpm add -g docsagent
```

### 2. Generate Documentation

```bash
# Generate README
docsagent generate:readme --name "MyProject" --desc "An awesome project"

# Generate Changelog
docsagent generate:changelog

# Generate API Docs
docsagent generate:api

# Generate all documentation
docsagent generate:all
```

### 3. View Your Documentation

Open `README.md` in your favorite editor and customize as needed!

---

## 📦 Installation

### Prerequisites

- **Node.js** version 18.0.0 or higher
- **npm**, **yarn**, or **pnpm** package manager

### Local Installation

For use in a specific project:

```bash
# Using npm
npm install --save-dev docsagent

# Using yarn
yarn add -D docsagent

# Using pnpm
pnpm add -D docsagent
```

### Global Installation

For CLI usage across your system:

```bash
# Using npm
npm install -g docsagent

# Using yarn
yarn global add docsagent

# Using pnpm
pnpm add -g docsagent
```

### Development Installation

To work on DocsAgent itself:

```bash
# Clone the repository
git clone https://github.com/moggan1337/DocsAgent.git

# Navigate to the project directory
cd DocsAgent

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

### Verifying Installation

```bash
# Check version
docsagent --version

# View help
docsagent --help
```

Expected output:
```
DocsAgent version 1.0.0
A powerful documentation generator for modern JavaScript/TypeScript projects.
```

---

## 🎯 Usage

### CLI Usage

DocsAgent provides a powerful command-line interface for all your documentation needs.

#### Basic Commands

```bash
# Generate README with project name and description
docsagent readme --name "MyAwesomeProject" --desc "The best project ever"

# Generate changelog
docsagent changelog

# Generate API documentation
docsagent api

# Generate all documentation types
docsagent all
```

#### Command Options

| Command | Shortcut | Description |
|---------|----------|-------------|
| `readme` | `r` | Generate README file |
| `changelog` | `c` | Generate CHANGELOG file |
| `api` | `a` | Generate API documentation |
| `all` | `-` | Generate all documentation |
| `--name <name>` | `-n` | Project name |
| `--desc <desc>` | `-d` | Project description |
| `--output <dir>` | `-o` | Output directory |
| `--template <template>` | `-t` | Template to use |
| `--format <format>` | `-f` | Output format (md/html/json) |
| `--verbose` | `-v` | Enable verbose output |
| `--dry-run` | `-dr` | Preview without writing files |

#### Examples

```bash
# Generate README with all options
docsagent readme -n "MyProject" -d "An amazing project" -o ./docs -v

# Generate changelog in verbose mode
docsagent changelog --verbose

# Generate API docs as HTML
docsagent api --format html --output ./api-docs

# Dry run to preview
docsagent all --dry-run --verbose

# Use a custom template
docsagent readme --template minimal --name "Minimal Project"
```

### Programmatic Usage

You can also use DocsAgent as a library in your JavaScript/TypeScript projects.

#### Basic Example

```typescript
import { DocsGenerator } from 'docsagent';

// Create a new instance of DocsGenerator
const docs = new DocsGenerator();

// Generate README
const readmeContent = docs.generateReadme({
  name: 'MyAwesomeProject',
  desc: 'A fantastic project that does amazing things'
});

console.log(readmeContent);
```

#### Complete Example

```typescript
import { DocsGenerator } from 'docsagent';

// Initialize with custom options
const docs = new DocsGenerator({
  template: 'modern',
  outputFormat: 'markdown',
  includeBadges: true,
  includeToc: true
});

// Generate all documentation
const readme = docs.generateReadme({
  name: 'MyProject',
  desc: 'An awesome project'
});

const changelog = docs.generateChangelog();
const apiDocs = docs.generateAPI();

// Write to files
import { writeFileSync } from 'fs';

writeFileSync('README.md', readme);
writeFileSync('CHANGELOG.md', changelog);
writeFileSync('API.md', apiDocs);

console.log('Documentation generated successfully!');
```

#### Async Usage

```typescript
import { DocsGenerator } from 'docsagent';

async function generateDocs() {
  const docs = new DocsGenerator();

  try {
    // Generate documentation
    const readme = await docs.generateReadmeAsync({
      name: 'AsyncProject',
      desc: 'Project using async/await'
    });

    // Save to file
    await docs.saveToFile('README.md', readme);

    console.log('Documentation generated and saved!');
  } catch (error) {
    console.error('Failed to generate documentation:', error);
  }
}

generateDocs();
```

### Configuration File

DocsAgent supports configuration files for consistent documentation generation.

#### docsagent.config.js

```javascript
/** @type {import('docsagent').DocsAgentConfig} */
module.exports = {
  project: {
    name: 'MyProject',
    description: 'An amazing project',
    version: '1.0.0',
    author: 'John Doe',
    license: 'MIT'
  },
  documentation: {
    readme: {
      includeBadges: true,
      includeToc: true,
      includeFeatures: true,
      includeLicense: true,
      template: 'modern'
    },
    changelog: {
      includeCommits: true,
      groupBy: 'type',
      types: ['feat', 'fix', 'docs', 'refactor', 'test', 'chore']
    },
    api: {
      includePrivate: false,
      includeDeprecated: true,
      outputFormat: 'markdown'
    }
  },
  output: {
    directory: './docs',
    format: 'markdown',
    filenameTemplate: '{type}-{date}'
  },
  templates: {
    customTemplates: './templates',
    defaultTemplate: 'modern'
  }
};
```

#### TypeScript Configuration

```typescript
import { DocsAgentConfig } from 'docsagent';

const config: DocsAgentConfig = {
  project: {
    name: 'MyTSProject',
    description: 'TypeScript project with full type support',
    version: '2.0.0',
    author: 'Jane Smith',
    license: 'MIT',
    repository: 'https://github.com/user/repo',
    homepage: 'https://example.com'
  },
  documentation: {
    readme: {
      includeBadges: true,
      includeToc: true,
      includeFeatures: true,
      includeLicense: true,
      includeContributing: true,
      includeSupport: true,
      template: 'comprehensive'
    },
    changelog: {
      includeCommits: true,
      groupBy: 'scope',
      conventionalCommits: true
    },
    api: {
      includePrivate: false,
      includeDeprecated: true,
      includeExamples: true,
      outputFormat: 'markdown'
    }
  }
};

export default config;
```

---

## 📚 API Reference

### DocsGenerator Class

The main class for generating documentation.

#### Constructor

```typescript
constructor(options?: DocsGeneratorOptions)
```

Creates a new DocsGenerator instance with optional configuration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | `DocsGeneratorOptions` | No | Configuration options |
| `options.template` | `string` | No | Template name (default: 'default') |
| `options.outputFormat` | `string` | No | Output format (default: 'markdown') |
| `options.includeBadges` | `boolean` | No | Include badges in output (default: true) |
| `options.includeToc` | `boolean` | No | Include table of contents (default: true) |

**Example:**

```typescript
const docs = new DocsGenerator({
  template: 'modern',
  outputFormat: 'markdown',
  includeBadges: true,
  includeToc: true
});
```

### Methods

#### generateReadme()

```typescript
generateReadme(config: ReadmeConfig): string
```

Generates a README file content based on the provided configuration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config` | `ReadmeConfig` | Yes | README configuration |
| `config.name` | `string` | Yes | Project name |
| `config.desc` | `string` | Yes | Project description |
| `config.features?` | `string[]` | No | List of features |
| `config.install?` | `string` | No | Installation instructions |
| `config.usage?` | `string` | No | Usage instructions |
| `config.license?` | `string` | No | License type |

**Returns:** `string` - The generated README content

**Example:**

```typescript
const readme = docs.generateReadme({
  name: 'MyProject',
  desc: 'A fantastic project',
  features: ['Fast', 'Reliable', 'Easy to use'],
  install: 'npm install myproject',
  usage: 'import MyProject from "myproject"',
  license: 'MIT'
});
```

#### generateChangelog()

```typescript
generateChangelog(options?: ChangelogOptions): string
```

Generates a changelog based on project history.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `options` | `ChangelogOptions` | No | Changelog options |
| `options.version?` | `string` | No | Version number |
| `options.date?` | `Date` | No | Release date |
| `options.changes?` | `Change[]` | No | List of changes |
| `options.groupBy?` | `string` | No | Group changes by type |

**Returns:** `string` - The generated changelog content

**Example:**

```typescript
const changelog = docs.generateChangelog({
  version: '1.0.0',
  date: new Date('2026-04-19'),
  changes: [
    { type: 'feat', description: 'Initial release' },
    { type: 'fix', description: 'Bug fixes' }
  ],
  groupBy: 'type'
});
```

#### generateAPI()

```typescript
generateAPI(config?: APIConfig): string
```

Generates API documentation from source code or configuration.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `config` | `APIConfig` | No | API documentation config |
| `config.title?` | `string` | No | Documentation title |
| `config.description?` | `string` | No | API description |
| `config.endpoints?` | `Endpoint[]` | No | API endpoints |
| `config.includeExamples?` | `boolean` | No | Include code examples |

**Returns:** `string` - The generated API documentation

**Example:**

```typescript
const apiDocs = docs.generateAPI({
  title: 'MyAPI Documentation',
  description: 'REST API for MyProject',
  endpoints: [
    {
      method: 'GET',
      path: '/users',
      description: 'Get all users',
      response: 'User[]'
    },
    {
      method: 'POST',
      path: '/users',
      description: 'Create a new user',
      body: 'User',
      response: 'User'
    }
  ],
  includeExamples: true
});
```

### Configuration Options

#### ReadmeConfig

```typescript
interface ReadmeConfig {
  name: string;
  desc: string;
  features?: string[];
  install?: string;
  usage?: string;
  license?: string;
  author?: string;
  repository?: string;
  homepage?: string;
  keywords?: string[];
  badges?: BadgeConfig[];
}
```

#### ChangelogOptions

```typescript
interface ChangelogOptions {
  version?: string;
  date?: Date;
  changes?: Change[];
  groupBy?: 'type' | 'scope' | 'date';
  conventionalCommits?: boolean;
}

interface Change {
  type: 'feat' | 'fix' | 'docs' | 'style' | 'refactor' | 'test' | 'chore';
  description: string;
  scope?: string;
  breaking?: boolean;
}
```

#### APIConfig

```typescript
interface APIConfig {
  title?: string;
  description?: string;
  version?: string;
  endpoints?: Endpoint[];
  models?: Model[];
  includeExamples?: boolean;
  includeDeprecated?: boolean;
}

interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  description: string;
  parameters?: Parameter[];
  body?: string;
  response?: string;
  examples?: Example[];
}

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface Example {
  title: string;
  code: string;
  language: string;
}
```

---

## ⚙️ Advanced Configuration

### Custom Templates

Create your own templates for documentation generation:

```bash
# Create template directory
mkdir -p templates

# Create template file
touch templates/custom-readme.ejs
```

```ejs
# <%= name %>

<%= description %>

## Features

<% features.forEach(feature => { %>
- <%= feature %>
<% }); %>

## Installation

<%= installation %>

## Usage

<%= usage %>

---

<%= license %> License
```

### Theme Options

Available built-in themes:

| Theme | Description |
|-------|-------------|
| `default` | Standard documentation theme |
| `modern` | Modern, clean design with badges |
| `minimal` | Minimalist, text-focused |
| `comprehensive` | Full-featured with all sections |
| `api-focused` | Optimized for API documentation |
| `github` | GitHub-flavored markdown |

### Output Formats

```typescript
const docs = new DocsGenerator({
  outputFormat: 'markdown' // or 'html', 'json', 'md'
});

// Generate in different formats
const markdown = docs.generateReadme({ name: 'P1', desc: 'D1' });
const html = docs.toHTML(markdown);
const json = docs.toJSON({ readme: markdown });
```

---

## 🛠️ CLI Commands

### Complete Command Reference

```bash
# Generate README
docsagent generate:readme [options]
  -n, --name <name>          Project name
  -d, --desc <desc>          Project description
  -o, --output <path>        Output directory
  -t, --template <template>  Template to use
  -f, --format <format>     Output format (md, html, json)
  -v, --verbose             Enable verbose output
  --dry-run                  Preview without writing

# Generate Changelog
docsagent generate:changelog [options]
  -o, --output <path>        Output directory
  -f, --format <format>      Output format
  -v, --verbose              Enable verbose output
  --group-by <type>          Group changes by type

# Generate API Docs
docsagent generate:api [options]
  -o, --output <path>        Output directory
  -f, --format <format>      Output format
  -v, --verbose              Enable verbose output
  --include-private          Include private methods
  --include-deprecated       Include deprecated items

# Generate All Documentation
docsagent generate:all [options]
  -c, --config <path>        Config file path
  -o, --output <path>        Output directory
  -v, --verbose              Enable verbose output
  --dry-run                  Preview without writing

# Init Configuration
docsagent init [options]
  -f, --force                Overwrite existing config
  -t, --template <template> Use template config

# Version
docsagent --version, -V      Show version number

# Help
docsagent --help, -h         Show help information
```

---

## 📝 Example Output

### Generated README Example

```markdown
# MyAwesomeProject 🚀

> A fantastic project that does amazing things

[![npm version](https://img.shields.io/npm/v/myawesomeproject.svg)](https://www.npmjs.com/package/myawesomeproject)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ⚡ Fast and efficient
- 🎯 Easy to use
- 🔧 Highly customizable
- 📦 Zero dependencies
- 🌐 Cross-platform

## Installation

```bash
npm install myawesomeproject
```

## Usage

```javascript
import MyAwesomeProject from 'myawesomeproject';

const project = new MyAwesomeProject();
project.start();
```

## License

MIT License - Copyright (c) 2026
```

### Generated Changelog Example

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-04-19

### Added
- Initial release
- Basic functionality
- README generation
- Changelog management
- API documentation

### Changed
- Improved documentation
- Better error handling

### Fixed
- Minor bug fixes
```

---

## 🔧 Development

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/moggan1337/DocsAgent.git
cd DocsAgent

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build the TypeScript project |
| `npm run test` | Run test suite |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run lint` | Lint code |
| `npm run format` | Format code |
| `npm run prepare` | Prepare for publication |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Contributing Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code of Conduct

Please be respectful and professional in all interactions.

### Reporting Issues

Found a bug? Please open an issue with:
- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 DocsAgent Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Related Links

- [NPM Package](https://www.npmjs.com/package/docsagent)
- [GitHub Repository](https://github.com/moggan1337/DocsAgent)
- [Issue Tracker](https://github.com/moggan1337/DocsAgent/issues)
- [Documentation](https://github.com/moggan1337/DocsAgent#readme)

---

<div align="center">

**Made with ❤️ by the DocsAgent team**

**Stars are welcome! ⭐**

</div>
