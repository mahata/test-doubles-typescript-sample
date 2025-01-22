import type { LaunchCode } from "./LaunchCode"

export class UnsignedLaunchCodeStub implements LaunchCode {
  isSigned(): boolean {
    return false
  }

  isExpired() {
    return false
  }
}
