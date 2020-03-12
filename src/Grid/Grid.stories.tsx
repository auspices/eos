const SRCS = [
  "https://cancer.auspic.es/6f13dea215bb272aaa927a969662e8467ab16e7d/resize/200x150/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FtTmIAruUVoOmnSxF.png",
  "https://cancer.auspic.es/cc7b1081092e5b40b75e68af334e0d54cabf0d40/resize/200x150/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FchxvtxQm0UgHKjST.png",
  "https://cancer.auspic.es/49db9628df2ce84221a39cb25a204ed86ebb3cbf/resize/200x196/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2Fo3pM4RLeYBiOyRAo.jpeg",
  "https://cancer.auspic.es/455ed05c9a5adecced550b35df05231fd9c0a755/resize/200x197/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FcO86yBTzJFN2Hd5H.jpeg",
  "https://cancer.auspic.es/594d6b2073fc8110c3fc14ec45d56731ecbb661f/resize/200x197/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FpElkws4Th9C4rAtd.jpeg",
  "https://cancer.auspic.es/26f173552924387ea5d167ca2483b2e66d5b4739/resize/200x274/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FLjrKqjMEh9U7P3dn.jpeg",
  "https://cancer.auspic.es/fc58eafbd6d31c14f2a5c2a5d7af7c577033d036/resize/200x154/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FgT7TRBvo2iKdoMvQ.png",
  "https://cancer.auspic.es/2c8b26fd93ac53047143591ddd94c35e51127a8c/resize/200x133/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2F37HWoPSNuVGaH6Fc.png",
  "https://cancer.auspic.es/6ca9b9e753eed18d650dcb5abda3fa8f5b7652df/resize/200x133/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2F2xkCegmSZp3si0Fg.jpeg",
  "https://cancer.auspic.es/fc09c3d3449cdf79b36f1d781e110b737eb870b8/resize/200x112/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FOfh1FWdZzCG4Stuz.jpeg",
  "https://cancer.auspic.es/323bcd46847814dabdbdc8d8590868e64a1ba59e/resize/200x100/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FaKcYpmpEKwdeMzKi.jpeg",
  "https://cancer.auspic.es/c45cbba5646adefb4d764ad511a17f474fc4f53c/resize/200x258/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FFIVigY83xkmePy4i.png",
  "https://cancer.auspic.es/9eda0d57a310ea7269eefb4ade237901f316b0fe/resize/200x133/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FMQ5EzWOgcWoaY4Sm.jpeg",
  "https://cancer.auspic.es/eee72d8b0c5ce300135e1033da51240370573340/resize/200x112/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FbaYhcC5Mq8EQRusG.jpeg",
  "https://cancer.auspic.es/e1b5f54e0957d3b97fa61c19b91a92b25b2bbb3d/resize/200x133/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FJJfg2cjqVwJauA6l.jpeg",
  "https://cancer.auspic.es/e4d8d564ed9a27792bf860023730b20f36444c7b/resize/200x133/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2Fi9aLnaMxAZl07Pkf.jpeg",
  "https://cancer.auspic.es/58a6f66c2e90e2261b6c468df350f9de2c4e70a1/resize/200x160/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2F2bbt8ilGiCeutOtx.jpeg",
  "https://cancer.auspic.es/167855581e9137decfa2505a864983b76532ac3e/resize/200x65/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FVWW3YHNWyg8j9UXV.jpeg",
  "https://cancer.auspic.es/6fed88e7fe5ffdb2e679c7a895f14b36d9dbfd6c/resize/200x87/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2F4RBInjFf5dPIdS7v.jpeg",
  "https://cancer.auspic.es/803415ba887b6b7b5c504699ea3f9f74c90285d0/resize/200x218/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2F125BygDH4sHQVCXo.jpeg",
  "https://cancer.auspic.es/44a22bf4da3c2f208fe082499bf83410096b10f7/resize/200x112/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FXvUUjE5n3i54gkRj.jpeg",
  "https://cancer.auspic.es/7dad1a01ea1388b22fe232994933761d1dbd9f89/resize/200x112/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FMLJEOqRe3J6jCANq.jpg",
  "https://cancer.auspic.es/5d27520dccd4a1d5f4a8a16de52e397a810dc927/resize/200x130/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FRT4U1kNB9Z4k6AVC.jpeg",
  "https://cancer.auspic.es/18ce4ecf818a90ce885477395b1b41b4ed2e892a/resize/200x110/95/https%3A%2F%2Fatlas-production.s3.amazonaws.com%2F1%2FGjuXydZpQOOhvIBR.jpg"
];

import React from "react";
import { States } from "storybook-states";
import { Grid, GridProps } from "./Grid";

export default { title: "Grid", component: Grid };

export const Default = () => (
  <States<GridProps> states={[{}]}>
    <Grid>
      {SRCS.map(src => (
        <img key={src} src={src} />
      ))}
    </Grid>
  </States>
);
