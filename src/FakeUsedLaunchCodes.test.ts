import { FakeUsedLaunchCodes } from "./FakeUsedLaunchCodes"
import { ValidLaunchCode } from "./LaunchCodeStub"

it("contains() は発射コードが使用済みか判別する", () => {
  const usedLaunchCodes = new FakeUsedLaunchCodes()
  const launchCode = new ValidLaunchCode()

  expect(usedLaunchCodes.contain(launchCode)).toBe(false)

  usedLaunchCodes.add(launchCode)

  expect(usedLaunchCodes.contain(launchCode)).toBe(true)
})
