# DocsAgent 📝

**Documentation Generator** - README, changelog, API docs.

## Features

- **📄 README** - Auto-generate README
- **📋 Changelog** - Keep changelog
- **📚 API Docs** - Generate API docs

## Installation

```bash
npm install docsagent
```

## Usage

```typescript
import { DocsGenerator } from 'docsagent';

const docs = new DocsGenerator();

const readme = docs.generateReadme({ name: 'MyApp', desc: 'An awesome app' });
const changelog = docs.generateChangelog();
const apiDocs = docs.generateAPI();
```

## License

MIT
