import type { LaunchCode } from "./LaunchCode"

export class ExpiredLaunchCodeStub implements LaunchCode {
  isSigned(): boolean {
    return true
  }

  isExpired() {
    return true
  }
}
