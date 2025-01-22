import type { LaunchCode } from "./LaunchCode"
import type { Rocket } from "./rocket"

export class Launcher {
  rocket: Rocket
  launchCode: LaunchCode

  constructor(rocket: Rocket, launchCode: LaunchCode) {
    this.rocket = rocket
    this.launchCode = launchCode
  }

  launchRocket() {
    if (!this.launchCode.isExpired() && this.launchCode.isSigned()) {
      this.rocket.launch()
    } else {
      this.rocket.disable()
    }
  }
}
