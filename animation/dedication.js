function revealMemoryWall() {
    const memoryWall = document.getElementById('memory-wall');
    memoryWall.classList.add('show');
    
    setTimeout(() => {
        memoryWall.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 800);
  
    setTimeout(() => {
        showButtonSection();
    }, 3200);
}

function showButtonSection() {
    const buttonSection = document.getElementById('button-section');
    if (buttonSection) {
        buttonSection.classList.add('show');
        setTimeout(() => {
            buttonSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
        }, 300);
    }
}

function disableScroll() {
    document.body.classList.add('no-scroll');
}

function enableScroll() {
    document.body.classList.remove('no-scroll');
}

function myMessage() {
    disableScroll();
    
    const letter = {
        msg: document.getElementById("letter"),
        sound: document.getElementById("keyboard-sound"),
        text: `
        I'm making this little message because I just want to appreciate you and everything you do for us.
        Honestly, I never expected to meet someone like you in my life. At first, I thought my first job would just be a normal experience, something I'd remember as my first time working. I never thought I'd meet someone there who would eventually become this important to me. But then, there you were.
        It was also the first time someone actually tried to pursue me, and I honestly didn't know how to feel about it at first. I used to think things like that only happened to special people, and I never really thought I would be that person. But you made me feel seen. You made me feel appreciated
        and valued in a way that nobody had ever made me feel before. You made me feel like I was worth choosing, and I'll always be thankful for that.

        - Brent Luwi`,
        index: 0
    };
    letter.sound.loop = true;
    letter.sound.play();
    typeWriter(letter);
}

function typeWriter(letter) {
    const oldCursor = document.querySelector('.cursor');
    if (oldCursor) {
        oldCursor.remove();
    }

    if (letter.index < letter.text.length) {
        const char = letter.text.charAt(letter.index);
        
        if (char === '\n') {
            letter.msg.textContent += char;
        } else {
            letter.msg.textContent += char;
        }
        
        letter.index++;

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        letter.msg.appendChild(cursor);
        const messageSection = document.querySelector('.top');
        if (messageSection) {
            messageSection.scrollIntoView({ 
                behavior: 'auto',
                block: 'end'
            });
        }

        setTimeout(() => typeWriter(letter), 80);
    } else {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
            cursor.remove();
        }

        letter.sound.pause();
        letter.sound.currentTime = 0;
        letter.sound.loop = false;

        enableScroll();
        revealMemoryWall();
        
        
        setupButtonHandler();
    }
}

function setupButtonHandler() {
    const navBtn = document.getElementById('nav-btn');
    if (navBtn) {
        navBtn.addEventListener('click', () => {
            window.location.href = 'memories.html';
        });
    }
}

setTimeout(myMessage, 900);