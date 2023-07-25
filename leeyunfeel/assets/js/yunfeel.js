if(!window['lezhin']) {
    lezhin = {};    ( function (_O) {
    _O.init = () => {
      const v = _O.Vars;
      v.curRound = 32;
      v.curStage = 0;
      v.gameHistory = {
        '32': [],
        '16': [],
        '8': [],
        '4': [],
        '2': [],
        '1': []
      };
      v.lists = _O.Ctrl.getLists();
      _O.Ctrl.prevCancelOnOff();
    };
    _O.start = () => {
      console.log()
      _O.init();
      _O.Ctrl.gameNewStart.bind(_O.Ctrl)();
    };
    _O.Vars = {
      lists:null,
      curRound: 0,
      curStage: 0,
      maxRound: 32,
      gameHistory: null
    };
    _O.Ctrl = {
      getLists() {
        return [
          {
            name: 'Return Feel',
            imgSrc: 'images/b1.jpg',
            selected: false
          },
          {
            name: 'TS Feel',
            imgSrc: 'images/b2.jpg',
            selected: false
          },
          {
            name: '재메이Feel',
            imgSrc: 'images/b3.jpg',
            selected: false
          },
          {
            name: '원빈 Feel윤',
            imgSrc: 'images/b4.jpg',
            selected: false
          },
          {
            name: 'Feel동건',
            imgSrc: 'images/b5.jpg',
            selected: false
          },
          {
            name: '뱀파이어 Feel',
            imgSrc: 'images/b6.jpg',
            selected: false
          },
          {
            name: '애나벨 Feel',
            imgSrc: 'images/b7.jpg',
            selected: false
          },
          {
            name: '이레즈미 Feel',
            imgSrc: 'images/b8.jpg',
            selected: false
          },
          {
            name: '원불Feel',
            imgSrc: 'images/b9.jpg',
            selected: false
          },
          {
            name: 'Joat Feel',
            imgSrc: 'images/b10.jpg',
            selected: false
          },
          {
            name: '마약제조 Feel',
            imgSrc: 'images/b11.jpg',
            selected: false
          },
          {
            name: '조커 Feel',
            imgSrc: 'images/b12.jpg',
            selected: false
          },
          {
            name: '오랄 Feel',
            imgSrc: 'images/b13.jpg',
            selected: false
          },
          {
            name: '대전역 할머니 Feel',
            imgSrc: 'images/b14.jpg',
            selected: false
          },
          {
            name: 'SilverOcean Feel',
            imgSrc: 'images/b15.jpg',
            selected: false
          },
          {
            name: '짱깨 아이돌 Feel',
            imgSrc: 'images/b16.jpg',
            selected: false
          },
          {
            name: '성일환 Feel',
            imgSrc: 'images/b17.jpg',
            selected: false
          },
          {
            name: '번뇌Feel',
            imgSrc: 'images/b18.jpg',
            selected: false
          },
          {
            name: '야마자키 Feel',
            imgSrc: 'images/b19.jpg',
            selected: false
          },
          {
            name: '프랑켄슈타인의 괴물 Feel',
            imgSrc: 'images/b20.jpg',
            selected: false
          },
          {
            name: '아이리스Feel',
            imgSrc: 'images/b21.jpg',
            selected: false
          },
          {
            name: '죽음Feel4주사위',
            imgSrc: 'images/b22.jpg',
            selected: false
          },
          {
            name: 'Feel으엉응우옌',
            imgSrc: 'images/b23.jpg',
            selected: false
          },
          {
            name: '매독Feel',
            imgSrc: 'images/b24.jpg',
            selected: false
          },
          {
            name: '제다이Feel',
            imgSrc: 'images/b25.jpg',
            selected: false
          },
          {
            name: 'GentleSilverOceanFeel',
            imgSrc: 'images/b26.jpg',
            selected: false
          },
          {
            name: '범죄Feel',
            imgSrc: 'images/b27.jpg',
            selected: false
          },
          {
            name: '촉촉GayFeel',
            imgSrc: 'images/b28.jpg',
            selected: false
          },
          {
            name: 'Feel치수',
            imgSrc: 'images/b29.jpg',
            selected: false
          },
          {
            name: 'WhitePremiunFeel',
            imgSrc: 'images/b30.jpg',
            selected: false
          },
          {
            name: '좀비Feel윤',
            imgSrc: 'images/b31.jpg',
            selected: false
          },
          {
            name: 'DeepDark앤디Feel',
            imgSrc: 'images/b32.jpg',
            selected: false
          }
        ];
      },
       rndLists(arr) { //배열 랜덤 섞음
        return arr.map((n) => { return [Math.random(), n] }).sort().map((n) => {  return n[1] });//n[1].selected = false;
      },
      selectedLists(arr) {
        return arr.filter((n) => n.selected === true);
      },
      gameNewStart() {
        const v = _O.Vars;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        _O.Html.set.bind(_O.Html)();
      },
        copyObj(obj) { //Deep Copy
        let copy = {};
        for (let attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }
        copy.selected = false;
        return copy;
      },
      nextRound() {
        const v = _O.Vars;
        if(v.curRound <= 1) return;
        v.lists = _O.Ctrl.selectedLists(v.gameHistory[v.curRound.toString()]).map((n) => _O.Ctrl.copyObj(n));
        if(v.curRound > 1) v.curRound /= 2;
        v.curStage = 0;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        // console.log('v.lists::',v.lists, 'v.gameHistory::',v.gameHistory);
        _O.Html.setRoundTitle();
      },
      prevCancelOnOff() {
        const footerObj = document.getElementById('footer');
        if(_O.Vars.curRound === _O.Vars.maxRound) {
          if(_O.Vars.curRound > 1 && _O.Vars.curStage > 0) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        } else {
          if(_O.Vars.curRound > 1) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        }
      }
    };
    _O.Event = {
      clickItem(obj) {
        const v = _O.Vars;
        if(v.curRound === 1) return;
        const idx = obj.id.split('_')[1];
        v.gameHistory[v.curRound.toString()][idx].selected = true;
        if(v.curStage < v.curRound/2) v.curStage++;
        if(v.curStage === v.curRound/2) _O.Ctrl.nextRound();
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      },
      overItem(obj) {
        const objs = document.querySelectorAll('#list_ideal li a[hover="true"]');
        objs.forEach((itm) => itm.setAttribute('hover', 'false'));
        if(obj.getAttribute('hover') === 'true') return;
        obj.setAttribute('hover', 'true');
      },
      outItem(obj) {
        if(obj.getAttribute('hover') === 'false') return;
        obj.setAttribute('hover', 'false');
      },
      clickCancel() {
        _O.start();
      },
      clickPrev() {
        const v = _O.Vars;content
        if(v.curStage > 0) v.curStage--;
        else {
          v.gameHistory[v.curRound.toString()] = [];
          if(v.curRound < _O.Vars.maxRound) {
            v.curRound *= 2;
            v.curStage = v.curRound / 2 - 1;
          }
          _O.Html.setRoundTitle();
          v.lists = v.gameHistory[v.curRound.toString()];
        }
         v.lists[v.curStage * 2].selected = false;
         v.lists[v.curStage * 2 + 1].selected = false;
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      }
    };
    _O.Html = {
      set() {
        this.setRoundTitle();
        this.setContent();
      },
      setHistory() {
        const tObj = document.getElementById('modal');
        let key, roundDiv, imgObj, roundTitleDiv, roundImgWrapDiv;
        let historyTitleDiv = document.createElement('DIV');
        historyTitleDiv.className = 'tit';
        historyTitleDiv.innerText = '히스토리';
        tObj.appendChild(historyTitleDiv);
        let wrapDiv = document.createElement('DIV');
        wrapDiv.className = 'history_box';
        for(key in _O.Vars.gameHistory) {
          roundDiv = document.createElement('DIV');
          roundDiv.className = 'round';
          roundTitleDiv = document.createElement('h5');
          roundTitleDiv.innerText = (key === '1' ? `최종 이상형` : `${key}강`);
          roundDiv.appendChild(roundTitleDiv);
          roundImgWrapDiv = document.createElement('DIV');
          _O.Vars.gameHistory[key].forEach((itm) => {
            imgObj = document.createElement('IMG');
            imgObj.setAttribute('src', itm.imgSrc);
            imgObj.className = `history_item ${itm.selected ? '' : (key !== '1' ? 'dim' : '')}`;
            roundImgWrapDiv.appendChild(imgObj);
          });
          roundDiv.appendChild(roundImgWrapDiv);
          wrapDiv.appendChild(roundDiv);
        }
        tObj.appendChild(wrapDiv);
      },
      setRoundTitle() {
        if(_O.Vars.curRound > 1) document.getElementById('roundTitle').innerText = `${_O.Vars.curRound}강 선택`;
        else document.getElementById('roundTitle').innerText = `우승!!!.`;
      },
      setItem() {
        const s = _O.Html.getItem();
        const tObj = document.getElementById('list_ideal');
        if(!tObj) return;
        tObj.innerHTML = s;
        if(_O.Vars.curRound === 1) _O.Html.setHistory();
      },
      getItem() {
        let s = '', i = _O.Vars.curStage * 2, length = i + (_O.Vars.curRound > 1 ? 2 : _O.Vars.curRound);
        for(i; i < length && length <= _O.Vars.curRound; i++) {
          s += `
          <li>
            <a class="item ${_O.Vars.curRound === 1 ? 'final' : ''}" id="item_${i}" hover="false" href="javascript:void(0);" onclick="lezhin.Event.clickItem(this);" onmouseover="lezhin.Event.overItem(this);" onmouseout="lezhin.Event.outItem(this);">
              <span class="thumb"><img src="${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['imgSrc']}" alt="여자 연예인 사진"></span>
              <strong> ${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['name']}</strong>
            </a>
          </li>
          `;
          if(_O.Vars.curRound === 1) {
            s += `
            <li id="history">
              <a class="modal final" id="modal" href="javascript:void(0);"></a>
            </li>
            `;
          }
        }
        return s;
      },
      setContent() {
        const tObj = document.getElementById('content');
        tObj.className = 'content in_game';
        let s = `
          <ul class="list_ideal" id="list_ideal">
          ${this.getItem()}
          </ul>
        `;
        tObj.innerHTML = s;
      }
    }    }) (lezhin);
}