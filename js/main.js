'use strict';

{
    // セレクターを使う場合
    // function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    
        // id属性を使う場合
        // document.querySelector('#target').textContent = 'Changed!';
                            // or
        // document.getElementById('target').textContent = 'Changed!';
        
        // querySelectorは最初の要素しか取得できないために、一個目しか変わらない。
        // document.querySelector('p').textContent = 'Changed!';
        // 全ての要素を取得したい場合は Allを追加し、何番目かを指定する
        // document.querySelectorAll('p')[1].textContent = 'Changed!';
        // 全ての要素を処理したい場合は、foreachを使う
        // document.querySelectorAll('p').forEach((p, index) => {
        //     p.textContent = `${index}番目のpです!`
        // });
    // }

    // addEventListenerは第一引数に、どのような操作か、第二引数に、処理を書く。
    // document.querySelector('button').addEventListener('click', () => {
        /**
         * 同じコードを書いている
        document.getElementById('target').title = 'This is title!';
        document.getElementById('target').textContent = 'Changed!';
         */

        // 定数の宣言
        // const targetNode = document.getElementById('target');
        // 変数で書くことによって、短くまとめれる。
        // targetNode.textContent = 'Changed!';
        // targetNode.title = 'This is title!';

        /**
         * jsでもcssを書くことができるが、一般的にはcssと役割分担する。
         */
        // cssを変更したい。style.cssで使うワード
        // targetNode.style.color = 'red';
        // 仮にcss変更時に-がある場合は、キャメル記法で記述する
        // targetNode.style.backgroundColor = 'skyblue';

        // クラス属性を変更する
        // targetNode.className = 'my-color';
        // 上記だとクラス属性がまるまる変わってしまうため、既にクラス属性を指定している場合は、それも指定しておく
        // targetNode.className = 'my-color my-border';
        // 下記の書き方だと、まるまる変わらない
        // targetNode.classList.add('my-color');
        // 要素に特定のクラスがついているかの条件分岐
        // if (targetNode.classList.contains('my-color') === true) {
        //     // ついている場合は、外す
        //     targetNode.classList.remove('my-color');
        // } else {
        //     // 付いていない場合は、つける。
        //     targetNode.classList.add('my-color');
        // };
        // もっと短く書くこともできる
        // targetNode.classList.toggle('my-color');

        // 英訳表示
        // targetNode.textContent = 'Dotinstall';
        // カスタムデータ属性の書き方
        // targetNode.textContent = targetNode.dataset.translation;
        
        // const item2 = document.createElement('li');
        // item2.textContent = 'item 2';

        // appendChild：子要素の一番最後に追加
        // // const ulNode = document.querySelector('ul');
        // const ul = document.querySelector('ul');
        // ul.appendChild(item2);

        // cloneNodeとinsertBeforeの使い方
        // const item0 = document.querySelectorAll('li')[0];
        // const copy = item0.cloneNode(true);

        // const ul = document.querySelector('ul');
        // const item2 = document.querySelectorAll('li')[2];
        // ul.insertBefore(copy, item2);

        // 要素の削除
        // const item1 = document.querySelectorAll('li')[1];
        // // item1.remove(); // 一部のブラウザでは使えない
        // document.querySelector('ul').removeChild(item1);

        // input要素の操作
        // const li = document.createElement('li');
        // // 入力された値を取得
        // const text = document.querySelector('input');
        // // .valueで値を持ってこれる
        // li.textContent = text.value;
        // document.querySelector('ul').appendChild(li);

        // text.value = '';
        // text.focus();

        // セレクトボックスの操作
        // const li = document.createElement('li');
        // const color = document.querySelector('select');
        // li.textContent = `${color.value} - ${color.selectedIndex}`;
        // document.querySelector('ul').appendChild(li);

        // ラジオボタンの操作
        // const colors = document.querySelectorAll('input');
        // let selectedColor;

        // colors.forEach(color => {
        //     if (color.checked === true) {
        //         selectedColor = color.value;
        //     }
        // });

        // const li = document.createElement('li');
        // li.textContent = selectedColor;
        // document.querySelector('ul').appendChild(li);

        //チェックボックスの操作
        // const colors = document.querySelectorAll('input');
        // const selectedColors = [];

        // colors.forEach(color => {
        //     if (color.checked === true) {
        //         selectedColors.push(color.value);
        //     }
        // });

        // const li = document.createElement('li');
        // li.textContent =  selectedColors.join(',');
        // document.querySelector('ul').appendChild(li);
    // });
    
    // 一秒後に呼び出す。
    // setTimeout(update, 1000);

    // // ダブルクリックされた時に呼び出し
    // document.querySelector('button').addEventListener('dblclick', () => {
    //     console.log('Double Clicked!');
    // });

    // // // マウスを動かされた時に呼び出し
    // // document.addEventListener('mousemove', () => {
    // //     console.log('moouved!');
    // // });
    // // // マウスの座標を取得
    // // document.addEventListener('mousemove', e => {
    // //     console.log(e.clientX,e.clientY);
    // // });
    // // キーボードの取得
    // document.addEventListener('keydown', e => {
    //     console.log(e.key);
    // });

    // formで利用できるイベント
    // const text =  document.querySelector('textarea');
    // // フォーカスされた時
    // text.addEventListener('focus', () => {
    //     console.log('focus');
    // });
    // // フォーカスが外れた時
    // text.addEventListener('blur', () => {
    //     console.log('blur');
    // });
    //内容が更新された時
    // text.addEventListener('input', () => {
    //     // 入力されている文字の長さ
    //     console.log(text.value.length);
    // });
    // // 更新が確定された時
    // text.addEventListener('change', () => {
    //     console.log('change');
    // })
    // document.querySelector('form').addEventListener('submit', e => {
    //     e.preventDefault();
    //     console.log('submit');
    // });

    // イベントの伝播について
    document.querySelector('ul').addEventListener('click', e => {
        if(e.target.nodeName === 'LI') {
            e.target.classList.toggle('done');
        }
    });
}