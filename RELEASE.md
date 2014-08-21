# Release standards and procedures

## Versioning

Dhrome follows the [Semantic Versioning](http://semver.org/) standard.

Given a version number `MAJOR.MINOR.PATCH`, increment the:

* MAJOR version when the new release contains incompatible API changes.

  ```diff
  -1.2.5
  +2.0.0
  ```
* MINOR version when the new release adds new functionality in a
  backwards-compatible manner.

  ```diff
  -1.2.5
  +1.3.0
  ```
* PATCH version when the new release contains backwards-compatible bug fixes.

  ```diff
  -1.2.5
  +1.2.6
  ```

Additional suffixes for pre-releases or build numbers may be appended, separated
by a dash/hyphen.
