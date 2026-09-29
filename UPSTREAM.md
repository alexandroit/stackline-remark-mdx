# Upstream and maintenance review

Independent maintenance of `remark-mdx@2.0.0` as `@stackline/remark-mdx`.

- Source history: https://github.com/mdx-js/mdx/tree/490da9f41e29570d020d3339a842627d6c849e37
- Original npm integrity: `sha512-TDnjSv77Oynf+K1deGWZPKSwh3/9hykVAxVm9enAw6BmicCGklREET8s19KYnjGsNPms0pNDJLmp+bnHDVItAQ==`.
- Issues checked: 2026-09-29T00:21:59.781247+00:00.
- Original authors, notices and license are retained. Published runtime and declaration file hashes are recorded in `.stackline/upstream.json`; reviewed differences are explicitly listed there.
- Original functional suites run against both source and the extracted final tarball. Type checks and the complete development/runtime audit must pass.

This maintenance branch selects the npm package from the upstream monorepo into the repository root and retains the upstream Git history. Shared tests are narrowed to this package and wired to its local implementation. Other monorepo products are not published by this repository.

The npm gitHead points to an older prerelease. The 2.0.0 tag was used instead and every published runtime JavaScript file was compared byte-for-byte before preparing this branch.

## Issue triage

- https://github.com/mdx-js/mdx/issues/1619: Monorepo dependency dashboard. The isolated package retains only the dependencies and development tools needed for its parser and validation.
- https://github.com/mdx-js/mdx/issues/2653: Expression whitespace semantics require coordinated syntax/compiler design. Existing parsing is preserved; this release does not claim to remove newline children.
- https://github.com/mdx-js/mdx/issues/2621: Future ECMAScript syntax proposal requiring parser and compiler support. Not introduced in this compatibility release.
- https://github.com/mdx-js/mdx/issues/2612: Image-alt expression handling is an existing syntax-extension limitation. No change to the MDX expression grammar is claimed in this release.
- https://github.com/mdx-js/mdx/issues/2606: Concerns the separate MDX compiler/evaluate runtime. This package provides a remark syntax plugin, not that evaluation runtime.
- https://github.com/mdx-js/mdx/issues/2536: New import/export syntax support requires coordinated parser/compiler changes. Not introduced in this compatibility release.
- https://github.com/mdx-js/mdx/issues/2444: Concerns React/Vite HMR in MDX 3. This package is the compatible remark-mdx 2 syntax plugin and has no HMR runtime.
- https://github.com/mdx-js/mdx/issues/454: RFC for multiple MDX documents in one file; feature proposal, not introduced here.

An additional reproduced TypeScript defect was fixed: the public Options alias now imports its defining package directly, avoiding a broken nested node_modules path in micromark-extension-mdxjs declarations. Valid and invalid options are compile-checked. Runtime code is unchanged.

The evidence query fetched the latest 100 open and 30 closed issue/PR entries and removed PRs. This is a bounded review, not a claim of exhaustive issue history or resolution of every issue.

## Release verification

GitHub Actions publishes the reviewed passing-CI tarball. Release completion requires exact source identity, zero open CodeQL alerts, npm provenance and tarball identity, normal and aliased installs, and matching immutable GitHub release assets. Existing versions are never replaced.
