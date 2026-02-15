# Release Notes

## Point Release Checklist

1. Ensure commits are patch-safe (`fix:`, `chore:`, `docs:`) and do not include `BREAKING CHANGE`.
2. Ensure npm Trusted Publishing is configured for `auspices/eos` and `.github/workflows/release.yml`.
3. Run local verification:

```bash
yarn verify:release
yarn pack --dry-run
```

4. Confirm tarball contents include only `dist` and package metadata.
5. Merge to `master` to trigger `.github/workflows/release.yml`.
6. Verify the published npm version and GitHub release notes.

## Release Pipeline

The release workflow now does:

1. Install root dependencies.
2. Run `yarn verify:release`.
3. Run `semantic-release` (without swallowing failures).

## Trusted Publishing Setup (One-time)

1. Open npm package settings for `@auspices/eos`.
2. Add a Trusted Publisher:
   `Type`: GitHub Actions
   `Repository`: `auspices/eos`
   `Workflow`: `release.yml`
   `Environment`: leave blank unless you use GitHub environments
3. In GitHub repo settings, remove the old `NPM_TOKEN` Actions secret after first successful trusted publish.
