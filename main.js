const time = () => {
  // 時刻表示の関数作成

  // 現在の日時

  const today = new Date(); // 現在日時を取得
  const year = today.getFullYear(); // 年を取得
  const month = today.getMonth() + 1; // 月を取得（0～11）
  const date = today.getDate(); // 日付を取得
  const day = today.getDay(); // 曜日を取得（0～6）
  const wArray = ["日", "月", "火", "水", "木", "金", "土"]; // 曜日の配列を作成
  const wDay = wArray[day]; // 日本語の曜日
  const hours = today.getHours(); // 時間を取得
  const minutes = today.getMinutes(); // 分を取得

  console.log(today); // 取得した現在日時を確認（削除可）
  $("#today .year").text(year + "年");
  $("#today .month").text(month + "月");
  $("#today .date").text(date + "日");
  $("#today .day").text(wDay + "曜日");
  $("#today .hours").text(hours + "時");
  $("#today .minutes").text(minutes + "分");

  // 衣装合わせの日時

  /* 期限日時の設定と表示の処理 */
  const limiteDay = new Date("2022/12/01 00:00:00"); // 期限日の日時を代入
  const limiteyear = limiteDay.getFullYear();
  const limitemonth = limiteDay.getMonth() + 1; // 月を取得、0～1で返されるため +1
  const limitedate = limiteDay.getDate();
  const limiteday = limiteDay.getDay();
  const limiteWDay = wArray[limiteday];
  const limitehours = limiteDay.getHours();
  const limiteminutes = limiteDay.getMinutes();

  console.log(limiteDay); // セットした日時を確認（削除可）
  $("#limited_1 .year").text(limiteyear + "年");
  $("#limited_1 .month").text(limitemonth + "月");
  $("#limited_1 .date").text(limitedate + "日");
  $("#limited_1 .day").text(limiteWDay + "曜日");
  $("#limited_1 .hours").text(limitehours + "時");
  $("#limited_1 .minutes").text(limiteminutes + "分");

  // 衣装合わせの日時

  /* 期限日時の設定と表示の処理 */
  const limiteDay2 = new Date("2023/2/04 00:00:00"); // 期限日の日時を代入
  const limiteyear2 = limiteDay2.getFullYear();
  const limitemonth2 = limiteDay2.getMonth() + 1; // 月を取得、0～1で返されるため +1
  const limitedate2 = limiteDay2.getDate();
  const limiteday2 = limiteDay2.getDay();
  const limiteWDay2 = wArray[limiteday2];
  const limitehours2 = limiteDay2.getHours();
  const limiteminutes2 = limiteDay2.getMinutes();

  console.log(limiteDay2); // セットした日時を確認（削除可）
  $("#limited_2 .year").text(limiteyear2 + "年");
  $("#limited_2 .month").text(limitemonth2 + "月");
  $("#limited_2 .date").text(limitedate2 + "日");
  $("#limited_2 .day").text(limiteWDay2 + "曜日");
  $("#limited_2 .hours").text(limitehours2 + "時");
  $("#limited_2 .minutes").text(limiteminutes2 + "分");

  // 結婚式の日時

  /* 期限日時の設定と表示の処理 */
  const limiteDay3 = new Date("2023/9/16 00:00:00"); // 期限日の日時を代入
  const limiteyear3 = limiteDay3.getFullYear();
  const limitemonth3 = limiteDay3.getMonth() + 1; // 月を取得、0～1で返されるため +1
  const limitedate3 = limiteDay3.getDate();
  const limiteday3 = limiteDay3.getDay();
  const limiteWDay3 = wArray[limiteday3];
  const limitehours3 = limiteDay3.getHours();
  const limiteminutes3 = limiteDay3.getMinutes();

  console.log(limiteDay3); // セットした日時を確認（削除可）
  $("#limited_3 .year").text(limiteyear3 + "年");
  $("#limited_3 .month").text(limitemonth3 + "月");
  $("#limited_3 .date").text(limitedate3 + "日");
  $("#limited_3 .day").text(limiteWDay3 + "曜日");
  $("#limited_3 .hours").text(limitehours3 + "時");
  $("#limited_3 .minutes").text(limiteminutes3 + "分");

  // 衣装合わせまで残り

  /* 期限日時までの残り日数と時間の計算と表示の処理 */
  const elToday = today.getTime(); // 基準日付時間（1970年1月1日）からの経過ミリ秒取得
  const ellimiteDay = limiteDay.getTime(); // 基準日付時間（1970年1月1日）からの経過ミリ秒取得
  const count = ellimiteDay - elToday; // 残り経過ミリ秒の差を計算
  const countDate = Math.trunc(count / 24 / 60 / 60 / 1000); // 日数に変換
  const countHours = Math.trunc((count / 60 / 60 / 1000) % 24); // 日数に変換後、24時間で割った余り
  const countMinutes = Math.trunc((count / 60 / 1000) % 60); // 時間に変換した後、60分で割った余り

  console.log(count); // 残り経過ミリ秒の差（削除可）
  if (!countDate < 1) {
    // 残り1日未満の場合は非表示
    $("#count .today").text(countDate + "日と");
  }
  if (!(countDate < 1 && countHours < 1)) {
    // 残り1日未満かつ1時間未満の場合は非表示
    $("#count .hours").text(countHours + "時間");
  }
  $("#count .minutes").text(countMinutes + "分");
};

time(); // 時刻表示の関数呼び出し

//最初に時刻表示した後は、1分後に表示を変更する
const countDown = () => {
  // 1分後に時刻表示の関数を呼び出す関数作成
  time();
  setTimeout(countDown, 60000); // 1分間隔
};

countDown(); // 1分間隔時刻表示の関数呼び出し
