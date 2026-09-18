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
        Thank you for always taking care of me whenever we're together. I know I'm sometimes dramatic, stubborn, and a little crazy, but you still put up with me anyway. You still try to understand me, even when I'm being difficult, and honestly, I love you for that. 
        I love the little things about you, especially the qualities you have that I've always wanted in someone.
        And I'm sorry for the times when my past and my own issues affect you or make you feel bad. I know I can sometimes overthink things because of what I've been through, and I'm really sorry when that happens. 
        But I appreciate you so much for always trying to reassure me and make me feel safe. You don't have to do all of that, but you still choose to. And that means so much to me.
        I also know that you have your own wounds and things you've been carrying since you were young. That's why I admire you even more for still choosing to love, care, and be there for me despite everything you've been through.
        I love you so much. Thank you for being brave enough to ask me for a chance and for choosing to stay with me. I promise I'll do my best to love you, understand you, and grow with you. I know we won't always be perfect, but I hope we keep choosing each other through everything.
        I want us to have the future we've always dreamed about. And someday, I hope we can look back at this moment and smile because we made it through everything together.
        Thank you for coming into my life, for making me feel loved, and for simply being you.
        I love you, always.
        
        - Brent Luwi
        `,
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