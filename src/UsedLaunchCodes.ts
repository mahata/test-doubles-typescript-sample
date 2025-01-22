import type { LaunchCode } from "./LaunchCode"

export interface UsedLaunchCodes {
  contain(launchCode: LaunchCode): boolean
  add(launchCode: LaunchCode): void
}
