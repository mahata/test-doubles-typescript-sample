import { Launcher } from "./Launcher"
import { RocketMock } from "./RocketMock"
import { RocketSpy } from "./RocketSpy"
import { UnsignedLaunchCodeStub, ExpiredLaunchCodeStub, ValidLaunchCode } from "./LaunchCodeStub"
import { FakeUsedLaunchCodes } from "./FakeUsedLaunchCodes"

// translation: [Spy] When expired launch code is given, rocket is not launched
it("発射コードが期限切れであれば、ロケットは発射しない (スパイ版)", () => {
  const rocket = new RocketSpy()

  const launcher = new Launcher()
  launcher.launchRocket(rocket, new ExpiredLaunchCodeStub(), new FakeUsedLaunchCodes())

  expect(rocket.wasLaunchCalled()).toBe(false)
  expect(rocket.wasDisableCalled()).toBe(true)
})

// translation: [Spy] When unsigned launch code is given, rocket is not launched
it("発射コードが署名されていなければ、ロケットは発射しない (スパイ版)", () => {
  const rocket = new RocketSpy()

  const launcher = new Launcher()
  launcher.launchRocket(rocket, new UnsignedLaunchCodeStub(), new FakeUsedLaunchCodes())

  expect(rocket.wasLaunchCalled()).toBe(false)
  expect(rocket.wasDisableCalled()).toBe(true)
})

// translation: [Mock] When expired launch code is given, rocket is not launched
it("発射コードが期限切れであれば、ロケットは発射しない (モック版)", () => {
  const rocket = new RocketMock()

  const launcher = new Launcher()
  launcher.launchRocket(rocket, new ExpiredLaunchCodeStub(), new FakeUsedLaunchCodes())

  rocket.verifyAbort()
})

// translation: [Mock] When unsigned launch code is given, rocket is not launched
it("発射コードが署名されていなければ、ロケットは発射しない (モック版)", () => {
  const rocket = new RocketMock()

  const launcher = new Launcher()
  launcher.launchRocket(rocket, new UnsignedLaunchCodeStub(), new FakeUsedLaunchCodes())

  rocket.verifyAbort()
})

it("使用済みの発射コードであれば、ロケットは発射しない", () => {
  const rocket1 = new RocketMock()
  const rocket2 = new RocketMock()
  const launchCode = new ValidLaunchCode()
  const usedLaunchCodes = new FakeUsedLaunchCodes()

  const launcher = new Launcher()
  launcher.launchRocket(rocket1, launchCode, usedLaunchCodes)
  launcher.launchRocket(rocket2, launchCode, usedLaunchCodes)

  rocket2.verifyAbort()
})
