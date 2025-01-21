import type { Rocket } from "./rocket"

export class DummyRocket implements Rocket {
  launch() {
    throw Error()
  }

  disable() {}
}
