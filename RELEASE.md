# Release Notes

## Point Release Checklist

1. Ensure commits are patch-safe (`fix:`, `chore:`, `docs:`) and do not include `BREAKING CHANGE`.
2. Run local verification:

```bash
yarn verify:release
yarn pack --dry-run
```

3. Confirm tarball contents include only `dist` and package metadata.
4. Merge to `master` to trigger `.github/workflows/release.yml`.
5. Verify the published npm version and GitHub release notes.

## Release Pipeline

The release workflow now does:

1. Install root dependencies.
2. Run `yarn verify:release`.
3. Run `semantic-release` (without swallowing failures).
