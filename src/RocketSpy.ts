import type { Rocket } from "./rocket"

export class RocketSpy implements Rocket {
  launchWasCalled = false
  disableWasCalled = false

  launch() {
    this.launchWasCalled = true
  }

  wasLaunchCalled(): boolean {
    return this.launchWasCalled
  }

  disable() {
    this.disableWasCalled = true
  }

  wasDisableCalled() {
    return this.disableWasCalled
  }
}
