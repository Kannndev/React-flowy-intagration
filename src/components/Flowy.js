import React, { useEffect, useState } from 'react';
import flowy from '../flowy-engine/flowy-engine';
import '../flowy-engine/flowy-engine.css';
import Navigation from './Navigation'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
import useEventListener from './hooks/useEventListener';
import images from '../images';

let tempblock;
let tempblock2;
let aclick = false;
let noinfo = false;

function Flowy() {
  const [leftcard, setLeftCard] = useState(true)
  const [rightcard, setRightCard] = useState(false)

  const addEventListenerMulti = (type, listener, capture, selector) => {
    let nodes = document.querySelectorAll(selector)
    nodes.forEach(node => node.addEventListener(type, listener, capture))
  }

  const onRearrange = (block, parent) => {
    return true;
  }

  const snapping = (drag, first, parent) =>{
    let grab = drag.querySelector('.grabme')
    grab.remove()
    let blockin = drag.querySelector('.blockin')
    blockin.remove()
    let blockelemtype = drag.querySelector('.blockelemtype').value;
    console.log(drag.innerHTML);
    switch (blockelemtype) {
      case 'whenACandidateMovedToThisStage':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./eye.svg']} draggable="false">
              <p class='blockyname'>New visitor</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>
            `
        break
      case 'whenAnInterviewIsScheduled':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./actionblue.svg']} draggable="false">
              <p class='blockyname'>Action is performed</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>When <span>Action 1</span> is performed</div>
          `
        break
      case 'whenAnInterviewIsCompleted':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./timeblue.svg']} draggable="false">
              <p class='blockyname'>Time has passed</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>When <span>10 seconds</span> have passed</div>
          `
        break
      case 'whenAQuestionnaireIsSent':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./errorblue.svg']} draggable="false">
              <p class='blockyname'>Error prompt</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>When <span>Error 1</span> is triggered</div>
          `
        break
      case 'whenAQuestionnaireIsSubmitted':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./databaseorange.svg']} draggable="false">
              <p class='blockyname'>New database entry</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>
          `
        break
      case 'whenAnEmailIsSent':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./databaseorange.svg']} draggable="false">
              <p class='blockyname'>Update database</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Update <span>Database 1</span></div>
          `
        break
      case 'whenAnEmailIsReceived':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./actionorange.svg']} draggable="false">
              <p class='blockyname'>Perform an action</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>
          `
        break
      case 'whenAScorecardIsRequested':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./twitterorange.svg']} draggable="false">
              <p class='blockyname'>Make a tweet</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span></div>
          `
        break
      case 'whenAScorecardIsSubmitted':
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./logred.svg']} draggable="false" >
              <p class='blockyname'>Add new log entry</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Add new <span>success</span> log entry</div>
          `
        break
      case 10:
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./logred.svg']} draggable="false">
              <p class='blockyname'>Update logs</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Edit <span>Log Entry 1</span></div>
          `
        break
      case 11:
        drag.innerHTML += `
            <div class='blockyleft'>
              <img src=${images['./errorred.svg']} draggable="false">
              <p class='blockyname'>Prompt an error</p>
            </div>
            <div class='blockyright'><img src=${images['./more.svg']}></div>
            <div class='blockydiv'></div>
            <div class='blockyinfo'>Trigger <span>Error 1</span></div>
          `
        break;
        default:
          break;
    }
  
    return true
  }

  const onExistingSnap = (block, parent) => {
    return true;
  };

  const drag = (block) => {
    block.classList.add('blockdisabled');
    tempblock2 = block;
  };

  const release = () => {
    if (tempblock2) {
      tempblock2.classList.remove('blockdisabled');
    }
  };

  const beginTouch = function (event) {
    aclick = true;
    noinfo = false;
    if (event.target.closest('.create-flowy')) {
      noinfo = true;
    }
  };
  const checkTouch = function (event) {
    aclick = false;
  };

  const doneTouch = function (event) {
    if (event.type === 'mouseup' && aclick && !noinfo) {
      if (
        !rightcard &&
        event.target.closest('.block') &&
        !event.target.closest('.block').classList.contains('dragging')
      ) {
        tempblock = event.target.closest('.block');
        console.log(tempblock);
        setRightCard(true);
        tempblock.classList.add('selectedblock');
      }
    }
  };

  useEventListener('mousedown', beginTouch);
  useEventListener('mousemove', checkTouch);
  useEventListener('mouseup', doneTouch);
  addEventListenerMulti('touchstart', beginTouch, false, '.block');

  useEffect(() => {
    tempblock = null;
    tempblock2 = null;
    aclick = false;
    noinfo = false;
    flowy(
      document.getElementById('canvas'),
      drag,
      release,
      snapping,
      onRearrange,
      20,
      80,
      onExistingSnap,
    );
    return () => {
      const nodes = document.querySelectorAll('.block');
      nodes.forEach(node => node.removeEventListener('touchstart', beginTouch));
      flowy.eventListeners.forEach(e => {
        document.removeEventListener(e.type, e.listener);
      });
    };
  }, []);

  return <>
    <Navigation title="Workflow" onSave={() => {
      console.log(flowy.output());
    }} />
      <LeftCard open={leftcard} onToggle={() => setLeftCard(!leftcard)} />
      {/* <RightCard
        open={rightcard}
        onRemove={() => {
          flowy.deleteBlock(tempblock.querySelector('.blockid').value);
          setRightCard(false)
          setLeftCard(true)
        }}
        onClose={() => {
          setRightCard(false)
          tempblock.classList.remove('selectedblock')
        }}
      /> */}
      <div style={{"position":"absolute","left":"363px","right":"0","overflow":"auto","bottom":"0","top":"72px"}}>
      <div id="canvas"></div>
      </div>
  </>;
}

export default Flowy;
