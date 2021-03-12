var dict = {
    'title': {
        en: 'Potato Timer',
        zh: '土豆计时器',
        es: 'Temporizador de Patata',
        ko: '포테이토 타이머'
    },
    'phase': {
        'work': {
            en: 'work',
            zh: '专注',
            es: 'Trabajo',
            ko: '일하기',
        },
        'short break': {
            en: 'short break',
            zh: '短休息',
            es: 'descanso breve',
            ko: '짧은 휴식기간',
        }, 
        'long break': {
            en: 'long break',
            zh: '长休息',
            es: 'descanso largo',
            ko: '긴 휴식기간',
        },
        'stopped': {
            en: 'stopped',
            zh: '已停止',
            es: 'parado',
            ko: '중지하기',
        },
        'idle': {
            en: 'idle',
            zh: '空闲',
            es: 'inactivo',
            ko: '놀고 있기',
        },
    },
    'reset': {
        en: 'Reset',
        zh: '重置',
        es: 'Reiniciar',
        ko: '재설정',
    },
    'start': {
        en: 'Start',
        zh: '开始',
        es: 'Empiezo',
        ko: '시작',
    },
    'stop': {
        en: 'Stop',
        zh: '暂停',
        es: 'Parar',
        ko: '멈춤',
    },
    'tasks': {
        en: 'Tasks',
        zh: '任务',
        es: 'Tareas',
        ko: '과제들',
    },
    'add': {
        en: 'Add',
        zh: '+',
        es: 'Agregar',
        ko: '추가',
    },
    'enterTask': {
        en: 'Enter a Task To Start',
        zh: '',
        es: 'Ingresa una tarea para empezar',
        ko: '시작하기 전에 과제가 추가하십시오',
    },
    'deleteAll': {
        en: 'Delete All',
        zh: '全部删除',
        es: 'Borrar Todo',
        ko: '모두 삭제하기',
    },
    'close': {
        en: 'Close',
        zh: '关闭',
        es: 'Cerrar',
        ko: '닫기',
    },
    'settings': {
        en: 'Settings',
        zh: '设置',
        es: 'Configuración',
        ko: '설정',
    },
    'selectTheme': {
        en: 'Select a Theme',
        zh: '选择主题',
        es: 'Seleccionar una Tema',
        ko: '테마 고르기',
    },
    'lightTheme': {
        en: 'Light',
        zh: '亮色',
        es: 'Luz',
        ko: '밝은',
    },
    'darkTheme': {
        en: 'Dark',
        zh: '暗色',
        es: 'Oscuro',
        ko: '어두운',
    },
    'potatoTheme': {
        en: 'Potato',
        zh: '土豆',
        es: 'Patata',
        ko: '감자',
    },
    'workTime': {
        en: 'Work Time',
        zh: '专注时间',
        es: 'Tiempo de Trabajo',
        ko: '일하는 시간',
    },
    'shortBreak': {
        en: 'Short Break',
        zh: '短休息',
        es: 'Descanso Breve',
        ko: '짧은 휴식',
    },
    'longBreak': {
        en: 'Long Break',
        zh: '长休息',
        es: 'Descanso Largo',
        ko: '긴 휴식',
    },
    // 'cycleLength': {
    //     en: 'Length of a Cycle',
    //     zh: '单个周期长度',
    //     es: '',
    //     ko: '한 사이클의 길이',
    // },
    'volume': {
        en: 'Volume',
        zh: '音量',
        es: 'Volumen',
        ko: '소리',
    },
    'confirmReset': {
        en: 'Are you sure you want to reset the timer\'s cycle?',
        zh: '确定您要重置时间吗？',
        es: '¿Está seguro de que desea reiniciar el ciclo del temporizador?',
        ko: '재설정을 원하십니까?',
    },
    'confirmDeleteAll': {
        en: 'Are you sure you want to delete all tasks?',
        zh: '确定您要删除所有的任务吗？',
        es: '¿Está seguro de que quiere borrar todas las tareas?',
        ko: '삭제를 원하십니까?',
    },
    'confirm': {
        en: 'Confirm',
        zh: '确认',
        es: 'Confirmar',
        ko: '확인하기',
    },
    'cancel': {
        en: 'Cancel',
        zh: '取消',
        es: 'Cancelar',
        ko: '취소하기',
    },
    '1': {
        'instrTopic': {
            en: 'Introduction', // CHANGED
            zh: '怎样使用',      // OLD PLEASE CHANGE
            es: '',
            ko: '소개', // Check
        },
        'instrContent': {
            en: 'Potato Timer is a Pomodoro Timer meant to improve your productivity by having you focus ' +
                'for a set "work" time and a following "break" time. After every four work phases, a longer break period occurs.\n' +
                '[Chinese]\n' + // These lines should be for users who don't know english (see other three areas)
                '[Spanish]\n' +
                '[Korean]\n', // 한국어에 설정 :)
            zh: '' +
                'To switch to English, click the gear icon to open the settings menu.' + // Translated to something like this 
                '[Spanish]\n' +
                '[Korean]\n',
            es: '' +
                'To switch to English, click the gear icon to open the settings menu.' +
                '[Chinese]\n' +
                '[Korean]\n',
            ko: '' +
                'To switch to English, click the gear icon to open the settings menu.' +
                '[Chinese]\n' +
                '[Spanish]\n',
        },
    },
    '2': {
        'instrTopic': {
            en: 'Settings',
            zh: '设置',
            es: 'Configuración', // Copied from earlier--no need to check
            ko: '설정',
        },
        'instrContent': {
            en: 'To open the settings, click the gear icon in the top right corner.\n' + 
                'There you can change to minimalist light and dark themes or our fun potato theme. ' +
                'In the potato theme, you can disable dancing potatoes if they are too distracting!\n' +
                'You can adjust how long you want the timer to run for each phase.\n' +
                'You can adjust the volume or click on the icon to mute it.\n' +
                'You can change your language to Español, 中文, 한국어.\n' +
                '',
            zh: '',
            es: '',
            ko: '',
        },
     },
    '3': {
        'instrTopic': {
            en: 'Tasks',
            zh: '任务',
            es: '',
            ko: '과제',
        },
        'instrContent': {
            en: 'You can enter your own tasks in the white field below the start button. ' +
                'To add a task, you may click the add button or press enter. ' +
                'One task is automatically pinned to the main page. ' +
                'If you want to see all of your tasks, click on the "Tasks" button! ' +
                'You can mark tasks as complete by clicking on the circle, ' +
                'pin or unpin tasks on the main page, and delete tasks. ' +
                'If you mark all tasks as done, the timer ends! Well done!\n' + 
                '*Unfinished tasks are locally stored in your cookies so you can get back to working ' +
                'If you return to our website!',
            zh: '',
            es: '',
            ko: '',
        },
     },
    '4': {
        'instrTopic': {
            en: 'About',
            zh: '关于',
            es: '',
            ko: '개발자 소개', // Developer Intro
        },
        'instrContent': {
            en: 'Potato Timer is happily developed by: \n',
            zh: '',
            es: '',
            ko: '',
        },
     },
    'enableAnimation': {
        en: 'Enable Potato Animation',
        zh: '',
        es: '',
        ko: '',
    },
    'disableAnimation': {
        en: 'Disable Potato Animation',
        zh: '',
        es: '',
        ko: '',
    },
    'notification': {
        'addTask': {
            en: 'A task has been added!',
            zh: '',
            es: '',
            ko: '과제를 추가했어!', // Informal :)
            // Uh 하다 / 되다?
        },
        'pinTask': {
            en: 'A task has been pinned!',
            zh: '',
            es: '',
            ko: '핀을 추가됐어!', // Pin was added
        },
        'unpinTask': {
            en: 'A task has been unpinned!',
            zh: '',
            es: '',
            ko: '핀을 뺐어!', // Pin was removed
        },
        'delTask': {
            en: 'A task has been deleted!',
            zh: '',
            es: '',
            ko: '과제를 삭제됐어!', // 되????????
        },
        'deleteAll': {
            en: 'All tasks have been deleted!',
            zh: '',
            es: '',
            ko: '과제를 모두 삭제됐어!',
        },
        
    },
    'help': { // aria-label="Show Instructions"
        en: 'Show Instructions',
        zh: '',
        es: '',
        ko: '설명은 보여',
    },
    'settingsIcon': { // alt="Show Settings"
        en: 'Show Settings',
        zh: '',
        es: '',
        ko: '설정은 보여', // Subject particle used because these are topics?
    },
    'mute': { // Mute volume
        en: 'Mute volume', // alt="Mute volume"
        zh: '',
        es: '',
        ko: '소리를 숨기다', // Check
    },
    'unmute': {
        en: 'Unmute volume',
        zh: '',
        es: '',
        ko: '소리를 듣다', // ??????
    },
    'noscript': {
        'sadPotato': { // alt="Sad Potato is Sad"
            en: 'Sad Potato is Sad',
            zh: '',
            es: '',
            ko: '슬픈 감자',
        },
        'jsDisabled': {
            en: 'Oh no!\n' +
            'We\'re sorry, but this website application uses JavaScript to operate the timer.\n' +
            'Please enable JavaScript for the best user experience!',
            zh: '啊',
            es: '',
            ko: '어머! ', 
        },
    },
    '': {
        en: '',
        zh: '',
        es: '',
        ko: '',
    },
} 

// Potato Timer             土豆计时器
// Work                     专注
// Reset                    重置
// Start                    开始
// Stop                     暂停
// Tasks                    任务
// Add                      添加
// Enter Task               输入任务
// Delete All               全部删除
// Confirm Reset - Are you sure you want to reset the timer?
// 确认重置 - 确定您要重置时间吗？
// Confirm Delete All - Are you sure you want to delete all tasks?
// 确认全部删除 - 确定您要删除所有的任务吗？
// Settings                设置
// Select a Theme          选择主题
// Light                   亮色
// Dark                    暗色
// Potato                  土豆
// Work Time               专注时间
// Short Break             短休息
// Long Break              长休息
// Volume                  音量
// Close                   关闭
