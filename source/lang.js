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
            zh: '土豆计时器是一个帮助提高效率的番茄钟定时器，其通过使你专注在特定的工作时间' +
                '并伴随之后的休息时间。在每四个工作阶段后，将会出现一个长休息时段。\n'+
                '若想切回英文版，请点击右上角设置图标打开菜单。\n' + // Translated to something like this 
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
            zh: '点击右上角工具图标打开设置菜单。\n'+
                '随后你将能切换到亮色或暗色模式，以及我们的趣味土豆模式。\n'+
                '在土豆模式中，如果你觉得被打扰，你可以取消跳舞的土豆动图。\n'+
                '你可以调整每个周期的长度。\n'+
                '你可以调整音量或点击图标静音。\n'+
                '你可以改变语言模式至English, Español，한국어。\n',
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
                'if you return to our website!',
            zh: '您可以在开始按钮下白色区域输入任意任务。' +
                '您可以点击添加图标或按下回车键来添加任务。'+
                '第一个任务自动添加至主页面。'+
                '若您想看到全部任务，点击‘任务’按钮。'+
                '您可以点击圆圈，标记任务为已完成，'+
                '也可以置顶或取消置顶任务到主页面，以及删除任务。'+
                '若您标记所有任务为已完成，计时器将自动停止！\n'+
                '*未完成的任务将自动存储在缓存记录中，以便于您在回到我们的网页时重回工作模式。',
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
            zh: '土豆计时器由以下成员开发：\n',
            es: '',
            ko: '',
        },
     },
    'enableAnimation': {
        en: 'Enable Potato Animation',
        zh: '启动土豆特效',
        es: '',
        ko: '',
    },
    'disableAnimation': {
        en: 'Disable Potato Animation',
        zh: '取消土豆特效',
        es: '',
        ko: '',
    },
    'notification': {
        'mark': {
            en: 'You marked a task as done!',
            zh: '已标记该任务为完成!',
            es: '',
            ko: '',
        },
        'unmark': {
            en: 'You marked a task as incomplete!',
            zh: '已标记该任务为未完成!',
            es: '',
            ko: '',
        },
        'addTask': {
            en: 'A task has been added!',
            zh: '该任务已添加!',
            es: '',
            ko: '과제를 추가했어!', // Informal :)
            // Uh 하다 / 되다?
        },
        'pinTask': {
            en: 'A task has been pinned!',
            zh: '该任务已放置到主页面!',
            es: '',
            ko: '핀을 추가됐어!', // Pin was added
        },
        'unpinTask': {
            en: 'A task has been unpinned!',
            zh: '该任务已被取消置顶!',
            es: '',
            ko: '핀을 뺐어!', // Pin was removed
        },
        'delTask': {
            en: 'A task has been deleted!',
            zh: '该任务已被删除！',
            es: '',
            ko: '과제를 삭제됐어!', // 되????????
        },
        'deleteAll': {
            en: 'All tasks have been deleted!',
            zh: '所有任务已被删除!',
            es: '',
            ko: '과제를 모두 삭제됐어!',
        },
        
    },
    'help': { // aria-label="Show Instructions"
        en: 'Show Instructions',
        zh: '显示帮助菜单',
        es: '',
        ko: '설명은 보여',
    },
    'settingsIcon': { // alt="Show Settings"
        en: 'Show Settings',
        zh: '显示设置菜单',
        es: '',
        ko: '설정은 보여', // Subject particle used because these are topics?
    },
    'mute': { // Mute volume
        en: 'Mute volume', // alt="Mute volume"
        zh: '静音',
        es: '',
        ko: '소리를 숨기다', // Check
    },
    'unmute': {
        en: 'Unmute volume',
        zh: '取消静音',
        es: '',
        ko: '소리를 듣다', // ??????
    },
    'noscript': {
        'sadPotato': { // alt="Sad Potato is Sad"
            en: 'Sad Potato is Sad',
            zh: '土豆很伤心',
            es: '',
            ko: '슬픈 감자',
        },
        'jsDisabled': {
            en: 'Oh no!\n' +
            'We\'re sorry, but this website application uses JavaScript to operate the timer.\n' +
            'Please enable JavaScript for the best user experience!',
            zh: '哦不！\n'+
            '抱歉，改网站使用JavaScript来运行计时器。\n'+
            '请启动JavaScript以享受最佳使用感受！',
            es: '',
            ko: '어머! ', 
        },
    },

    'markBtn': { // ARIA Screen Reader aria-label="Mark as done"
        en: 'Mark as Done',
        zh: '标记为已完成',
        es: '',
        ko: '',
    },
    'pinBtn': { // ARIA Screen Reader 
        en: 'Pin to the Main Display',
        zh: '添加到主页面展示',
        es: '',
        ko: '',
    },
    'delBtn': { // ARIA Screen Reader
        en: 'Delete this Task',
        zh: '删除该任务',
        es: '',
        ko: '',
    },
    'taskHelp': {
        en: 'Mark a task as complete. Pin a task to the main display.',
        zh: '标记任务为已完成，或添加任务到主页面。',
        es: '',
        ko: '',
    },

    '': {
        en: '',
        zh: '',
        es: '',
        ko: '',
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
