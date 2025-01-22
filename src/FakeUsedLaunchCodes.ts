import type { LaunchCode } from "./LaunchCode"
import type { UsedLaunchCodes } from "./UsedLaunchCodes"

export class FakeUsedLaunchCodes implements UsedLaunchCodes {
  private launchCodes: Set<LaunchCode> = new Set()

  add(launchCode: LaunchCode): void {
    this.launchCodes.add(launchCode)
  }

  contain(launchCode: LaunchCode): boolean {
    return this.launchCodes.has(launchCode)
  }
}
