import type { LaunchCode } from "./LaunchCode"
import type { Rocket } from "./rocket"
import type { UsedLaunchCodes } from "./UsedLaunchCodes"

export class Launcher {
  launchRocket(rocket: Rocket, launchCode: LaunchCode, usedLaunchCodes: UsedLaunchCodes) {
    if (!usedLaunchCodes.contain(launchCode) && !launchCode.isExpired() && launchCode.isSigned()) {
      rocket.launch()
      usedLaunchCodes.add(launchCode)
    } else {
      rocket.disable()
    }
  }
}
