import { DummyRocket } from "./DummyRocket"
import { Launcher } from "./Launcher"
import { ValidLaunchCodeStub } from "./ValidLaunchCodeStub"

it("When expired launch code is given, rocket is not launched", () => {
  const launcher = new Launcher(new DummyRocket(), new ValidLaunchCodeStub())
  launcher.launchRocket()
})
