export class DocsGenerator {
  generateReadme(config: { name: string; desc: string }) { return `# ${config.name}\n\n${config.desc}\n`; }
  generateChangelog() { return `## Changelog\n\n### 1.0.0\n- Initial release\n`; }
  generateAPI() { return `## API\n\n暂无内容\n`; }
}
export default DocsGenerator;
