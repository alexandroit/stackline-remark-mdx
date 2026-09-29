# Changelog

## 1.0.0

- Start Stackline maintenance of the documented upstream API.
- Preserve and verify published runtime files and TypeScript declarations.
- Run upstream functional suites against both source and the final package.
- Publish the reviewed CI artifact through GitHub Actions with provenance and immutable release evidence.
- Fix public option type resolution without relying on a dependency’s invalid nested node_modules declaration path; parser runtime is unchanged.
