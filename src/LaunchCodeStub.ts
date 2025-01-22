import type { LaunchCode } from "./LaunchCode"

export class ValidLaunchCode implements LaunchCode {
  isSigned() {
    return true
  }

  isExpired() {
    return false
  }
}

export class UnsignedLaunchCodeStub extends ValidLaunchCode {
  isSigned(): boolean {
    return false
  }
}

export class ExpiredLaunchCodeStub extends ValidLaunchCode {
  isExpired() {
    return true
  }
}
