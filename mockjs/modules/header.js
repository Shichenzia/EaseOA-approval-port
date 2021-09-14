import Mock from "mockjs";
import { REQUEST_DOMAIN } from "../../src/common/constants";

Mock.mock(`${REQUEST_DOMAIN}/test`, {
  result: "ok",
  data: {
    msg: "Hello Tsias-0",
  },
});
