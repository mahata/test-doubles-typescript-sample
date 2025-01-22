import { ExpiredLaunchCodeStub } from "./ExpiredLaunchCodeStub"
import { Launcher } from "./Launcher"
import { RocketMock } from "./RocketMock"
import { RocketSpy } from "./RocketSpy"
import { UnsignedLaunchCodeStub } from "./UnsignedLaunchCodeStub"

// translation: [Spy] When expired launch code is given, rocket is not launched
it("発射コードが期限切れであれば、ロケットは発射しない (スパイ版)", () => {
  const rocket = new RocketSpy()

  const launcher = new Launcher(rocket, new ExpiredLaunchCodeStub())
  launcher.launchRocket()

  expect(rocket.wasLaunchCalled()).toBe(false)
  expect(rocket.wasDisableCalled()).toBe(true)
})

// translation: [Spy] When unsigned launch code is given, rocket is not launched
it("発射コードが署名されていなければ、ロケットは発射しない (スパイ版)", () => {
  const rocket = new RocketSpy()

  const launcher = new Launcher(rocket, new UnsignedLaunchCodeStub())
  launcher.launchRocket()

  expect(rocket.wasLaunchCalled()).toBe(false)
  expect(rocket.wasDisableCalled()).toBe(true)
})

// translation: [Mock] When expired launch code is given, rocket is not launched
it("発射コードが期限切れであれば、ロケットは発射しない (モック版)", () => {
  const rocket = new RocketMock()

  const launcher = new Launcher(rocket, new ExpiredLaunchCodeStub())
  launcher.launchRocket()

  rocket.verifyAbort()
})

// translation: [Mock] When unsigned launch code is given, rocket is not launched
it("発射コードが署名されていなければ、ロケットは発射しない (モック版)", () => {
  const rocket = new RocketMock()

  const launcher = new Launcher(rocket, new UnsignedLaunchCodeStub())
  launcher.launchRocket()

  rocket.verifyAbort()
})
