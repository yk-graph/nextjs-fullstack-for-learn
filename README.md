### Introduction

`NextJS version14` `app router` `server action` を使ったタスク作成アプリケーション

| Index  | Description                                            |
| ------ | ------------------------------------------------------ |
| Udemy  | https://www.udemy.com/course/nextjs-fullstack          |
| Github | https://github.com/yk-graph/nextjs-fullstack-for-learn |
| Deploy | Data                                                   |

| Stack  | Description          |
| ------ | -------------------- |
| Nextjs | version 14 AppRouter |
| form   | server actions       |
| DB     | MongoDB              |

| Lib      | Description                            |
| -------- | -------------------------------------- |
| mongoose | https://www.npmjs.com/package/mongoose |

### Tips \*NextJS

| Index          | AsIs                                                                                                   | ToBe                                                                   | Solution                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| route handler  | route ハンドラで記述した処理は静的な要素としてビルドされる<br>\*ビルド時点で取得したデータが表示される | API にリクエストが発生されるたびに動的にデータを取得したい             | [export const dynamic = 'force-dynamic'](https://nextjs.org/docs/14/app/api-reference/file-conventions/route-segment-config#dynamic) |
| fetch cache    | fetch 関数を使ってデータを取得するとデフォルトではキャッシュを利用する設定になっている                 | キャッシュを利用せず、fetch 関数実行時に返却された値を取得したい       | [fetch(`https://...`, { cache: 'no-store' })](https://nextjs.org/docs/14/app/api-reference/functions/fetch#optionscache)             |
| cache log      | fetch 関数実行時にキャッシュが利用されているか分からない                                               | キャッシュが利用されている場合ターミナルに `cache: HIT` と表示させたい | [next.config.mjs に設定を記述](https://nextjs.org/docs/app/api-reference/config/next-config-js/logging)                              |
| send form      | client 側からフォームを送信                                                                            | server action を使った form の送信                                     |
| error handling | api route 側でエラーを定義                                                                             | server component でエラーを受けて error.tsx で表示したい               |
| api route      | API リクエストの時にパラメータの値を受け取りたい                                                       | ---                                                                    |
| send form      | ---                                                                                                    | ---                                                                    |
| send form      | ---                                                                                                    | ---                                                                    |

### Tips \*MongoDB

| Index    | Want                                                 | Answer                                                                                                                                                                |
| -------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mongoose | mongoDB に保存するドキュメントの型を定義したい       | `models`配下で管理<br>1. 登録したいドキュメントの型を定義する<br>2. デフォルトで使用する型は Document 型を使って extends して定義する                                 |
| mongoose | mongoDB のドキュメントの構造(Schema)を定義したい     | `models`配下で管理<br>`new mongoose.Schema` を使って定義する                                                                                                          |
| mongoose | DB と接続したい                                      | `src/utils/database.ts` で定義した関数を使用する<br>ex: `await connectDb()`                                                                                           |
| mongoose | ドキュメントをインサートしたい                       | modle に対して.create 関数を使う<br>ex: `await TaskModel.create(newTask)`                                                                                             |
| Schema   | `interface`と`new mongoose.Schema`との役割の違いは？ | `interface` TypeScript のインターフェースであり、コード内で型チェックを行うためのもの<br>`Schema` Mongoose の機能であり、MongoDB に保存されるドキュメントの構造を定義 |
