import type { LaunchCode } from "./LaunchCode"

export class ValidLaunchCodeStub implements LaunchCode {
  isSigned() {
    return true
  }

  isExpired() {
    return false
  }
}
