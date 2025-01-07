### Introduction

`NextJS version14` `app router` `server action` を使ったタスク作成アプリケーション

| Index  | Description                                   |
| ------ | --------------------------------------------- |
| Udemy  | https://www.udemy.com/course/nextjs-fullstack |
| Github | Data                                          |
| Deploy | Data                                          |

| Stack  | Description          |
| ------ | -------------------- |
| Nextjs | version 14 AppRouter |
| form   | server actions       |
| DB     | Mongo                |

### Tips

| Index         | AsIs                                                                                               | ToBe                                                               | Solution                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| route handler | route ハンドラで記述した処理は静的な要素としてビルドされる(ビルド時点で取得したデータが表示される) | API にリクエストが発生される事に動的にデータを取得したい           | [export const dynamic = 'force-dynamic'](https://nextjs.org/docs/14/app/api-reference/file-conventions/route-segment-config#dynamic) |
| fetch cache   | デフォルトでは fetch 関数を使ってデータを取得するとキャッシュを利用する設定になっている            | キャッシュを利用せず fetch 関数実行時に返却された値を取得したい    | [fetch(`https://...`, { cache: 'no-store' })](https://nextjs.org/docs/14/app/api-reference/functions/fetch#optionscache)             |
| cache log     | fetch 関数実行時に Cache が利用されているか分からない                                              | Cache が利用されている場合ターミナルに `cache: HIT` と表示させたい | [next.config.mjs に設定を記述](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)                              |
