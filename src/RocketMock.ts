import type { Rocket } from "./rocket"

export class RocketMock implements Rocket {
  launchWasCalled = false
  disableWasCalled = false

  launch() {
    this.launchWasCalled = true
  }

  disable() {
    this.disableWasCalled = true
  }

  verifyAbort() {
    expect(this.launchWasCalled).toBe(false)
    expect(this.disableWasCalled).toBe(true)
  }
}
