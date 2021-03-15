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
            ko: '쉬는 시간',
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
        zh: '添加',
        es: 'Agregar',
        ko: '추가',
    },
    'enterTask': {
        en: 'Enter a Task To Start',
        zh: '请输入任务来开始使用',
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
            es: 'Introducción',
            ko: '소개', // Check
        },
        'instrContent': {
            en: 'Potato Timer is a Pomodoro Timer meant to improve your productivity by having you focus ' +
                'for a set "work" time and a following "break" time. After every four work phases, a longer break period occurs.\n' +
                '若想中文版，请点击右上角设置图标打开菜单。\n' + // These lines should be for users who don't know english (see other three areas)
                'Para cambiar el idioma a ingles, abra el menú de configuración haciendo clic en el icono de engranaje.\n' +
                '영어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n', // 한국어에 설정 :)
            zh: '土豆计时器是一个帮助提高效率的番茄钟定时器，其通过使你专注在特定的工作时间' +
                '并伴随之后的休息时间。在每四个工作阶段后，将会出现一个长休息时段。\n'+
                'To switch to English, click the gear icon to open the settings menu.\n' + // Translated to something like this 
                'Para cambiar el idioma a ingles, abra el menú de configuración haciendo clic en el icono de engranaje.\n' +
                '영어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n',
            es: 'Para cambiar el idioma a ingles, abra el menú de configuración haciendo clic en el icono de engranaje.\n' +
                'To switch to English, click the gear icon to open the settings menu.\n' +
                '若想中文版，请点击右上角设置图标打开菜单\n' +
                '영어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n',
            ko: '영어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n' +
                'To switch to English, click the gear icon to open the settings menu.\n' +
                '若想中文版，请点击右上角设置图标打开菜单\n' +
                'Para cambiar el idioma a inglés, abra el menú de configuración haciendo clic en el icono de engranaje.\n',
        },
    },
    '2': {
        'instrTopic': {
            en: 'Settings',
            zh: '设置',
            es: 'Configuración',
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
            es: 'Para abrir las configuraciones, haga clic en el icono de engranaje en la esquina superior derecha.\n' + 
                'Allí puede cambiar la tema a las temas minimalistas de luz or oscuro, o a nuestra tema patata divertida. ' +
                '¡Puede desactivar las patatas danzantes en nuestra tema de patatas si le distrean!\n' +
                'Puede ajustar cuánto tiempo desea que funcione el temporizador para cada fase.\n' +
                'Puede ajustar el volumen o hacer clic en el icono para silenciarlo.\n' +
                'Puede ajustar el idioma a inglés, 中文, 한국어.\n' +
                '',
            ko: '설정을 열려면 오른쪽 상단에있는 기어 아이콘을 클릭하세요.\n' + 
                '설정에서 최소한의 밝고 어두운 테마 또는 재미있는 감자 테마로 변경할 수 있습니다. ' +
                '감자 테마에서는 춤추는 감자가 너무 산만하다면 비활성화 할 수 있습니다!\n' +
                '각 단계에서 타이머를 실행할 시간을 조정할 수 있습니다.\n' +
                '볼륨을 조절하거나 아이콘을 클릭하여 음소거 할 수 있습니다..\n' +
                '언어를 English, 中文, Español 로 변경할 수 있습니다.\n' +
                '',
        },
     },
    '3': {
        'instrTopic': {
            en: 'Tasks',
            zh: '任务',
            es: 'Tareas',
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
            es: 'Puede ingresar sus propias tareas en el campo blanco debajo del botón de inicio ' +
                'Para agregar una tarea, puede hacer clic en el botón Agregar o presionar Intro. ' +
                'Una tarea se fija automáticamente a la página principal. ' +
                'Si desea ver todas sus tareas, ¡haga clic en el botón "Tareas"! ' +
                'Puede marcar las tareas como completadas haciendo clic en el círculo, ' +
                'anclar o desanclar tareas en la página principal, y borrar tareas. ' +
                'Si marcas todas las tareas como hechas, ¡el temporizador termina! ¡Bien hecho!\n' + 
                '*Las tareas inconclusas se almacenan localmente en sus cookies para que pueda volver a trabajar ' +
                'si regresa a nuestro sitio web!',
            ko: '시작 버튼 아래의 흰색 필드에 자신의 과제를 입력 할 수 있습니다. ' +
                '과제를 추가하려면 추가 버튼을 클릭하거나 Enter 키를 누릅니다. ' +
                '한 과제는 자동으로 메인 페이지에 고정됩니다. ' +
                '모든 과제를 보려면 "과제"버튼을 클릭하십시오! ' +
                '동그라미를 클릭하여 과제를 완료로 표시 할 수 있고, ' +
                '메인 페이지에서 과제를 고정 또는 고정 해제하고 작업을 삭제 할 수 있습니다. ' +
                '모든 과제를 완료로 표시하면 타이머가 종료됩니다! 잘하셨습니다!\n' + 
                '*완료되지 않은 과제는 쿠키에 로컬로 저장되므로 다시 작업 할 수 있습니다 ' +
                '우리 웹 사이트로 돌아 오시면!',
        },
     },
    '4': {
        'instrTopic': {
            en: 'About',
            zh: '关于',
            es: 'Sobre los Desarrolladores',
            ko: '개발자 소개', // Developer Intro
        },
        'instrContent': {
            en: 'Potato Timer is happily developed by: \n',
            zh: '土豆计时器由以下成员开发：\n',
            es: 'El temporizador de patata está desarrollado por: \n',
            ko: '포테이토 타이머 개발자들: \n',
        },
     },
    'enableAnimation': {
        en: 'Enable Potato Animation',
        zh: '启动土豆特效',
        es: 'Active la animación de papa',
        ko: '감자 애니메이션 활성화',
    },
    'disableAnimation': {
        en: 'Disable Potato Animation',
        zh: '取消土豆特效',
        es: 'Desactive la animación de papa',
        ko: '감자 애니메이션 비활성화',
    },
    'notification': {
        'welcome': {
            en: 'Welcome Back!',
            zh: '欢迎回来',
            es: 'Bienvenido de nuevo!',
            ko: '다시 오신 것을 환영합니다!',
        },
        'mark': {
            en: 'You marked a task as done!',
            zh: '已标记该任务为完成!',
            es: 'Marcó una tarea como hecha!',
            ko: '과제를 완료로 표시했습니다!',
        },
        'unmark': {
            en: 'You marked a task as incomplete!',
            zh: '已标记该任务为未完成!',
            es: 'Marcó una tarea como incompleta!',
            ko: '과제를 미완료로 표시했습니다',
        },
        'addTask': {
            en: 'A task has been added!',
            zh: '该任务已添加!',
            es: 'Se ha agregado una tarea!',
            ko: '과제가 추가됐습니다!', // Informal :)
            // Uh 하다 / 되다?
        },
        'pinTask': {
            en: 'A task has been pinned!',
            zh: '该任务已放置到主页面!',
            es: 'Se ha fijado una tarea!',
            ko: '핀이 추가됐어습니다!', // Pin was added
        },
        'unpinTask': {
            en: 'A task has been unpinned!',
            zh: '该任务已被取消置顶!',
            es: 'Se ha desanclado una tarea!',
            ko: '핀을 뺐어!', // Pin was removed
        },
        'delTask': {
            en: 'A task has been deleted!',
            zh: '该任务已被删除！',
            es: 'Se ha borrado una tarea!',
            ko: '과제를 삭제됐어!', // 되????????
        },
        'deleteAll': {
            en: 'All tasks have been deleted!',
            zh: '所有任务已被删除!',
            es: 'Todas las tareas han sido borradas!',
            ko: '과제를 모두 삭제됐어!',
        },
        
    },
    'help': { // aria-label="Show Instructions"
        en: 'Show Instructions',
        zh: '显示帮助菜单',
        es: 'Muestre instrucciones',
        ko: '설명은 보여',
    },
    'instructions': {
        en: 'Instructions',
        zh: '帮助菜单',
        es: 'Instrucciones',
        ko: '설명',
    },
    'settingsIcon': { // alt="Show Settings"
        en: 'Show Settings',
        zh: '显示设置菜单',
        es: 'Muestre configuración',
        ko: '설정은 보여', // Subject particle used because these are topics?
    },
    'mute': { // Mute volume
        en: 'Mute volume', // alt="Mute volume"
        zh: '静音',
        es: 'Silencie volumen',
        ko: '소리를 숨기다', // Check
    },
    'unmute': {
        en: 'Unmute volume',
        zh: '取消静音',
        es: 'Active el volumen',
        ko: '소리를 듣다', // ??????
    },
    'noscript': {
        'sadPotato': { // alt="Sad Potato is Sad"
            en: 'Sad Potato is Sad',
            zh: '土豆很伤心',
            es: 'Papa Triste',
            ko: '슬픈 감자',
        },
        'jsDisabled': {
            en: 'Oh no!\n' +
            'We\'re sorry, but this website application uses JavaScript to operate the timer.\n' +
            'Please enable JavaScript for the best user experience!',
            zh: '哦不！\n'+
            '抱歉，改网站使用JavaScript来运行计时器。\n'+
            '请启动JavaScript以享受最佳使用感受！',
            es: 'Ups!\n' +
            'Lo siento, pero esta aplicación de sitio web utiliza JavaScript para operar el temporizador.\n' +
            '¡Habilite JavaScript para obtener la mejor experiencia de usuario!',
            ko: '어머!\n' + 
            '죄송합니다.이 웹 사이트 응용 프로그램은 JavaScript를 사용하여 타이머를 작동합니다.\n' +
            '최상의 사용자 경험을 위해 JavaScript를 활성화하십시오!', 
        },
    },

    'markBtn': { // ARIA Screen Reader aria-label="Mark as done"
        en: 'Mark as Done',
        zh: '标记为已完成',
        es: 'Marque como hecha',
        ko: '완료로 표시',
    },
    'pinBtn': { // ARIA Screen Reader 
        en: 'Pin to the Main Display',
        zh: '添加到主页面展示',
        es: 'Ancle a la pantalla principal',
        ko: '메인 디스플레이에 고정',
    },
    'delBtn': { // ARIA Screen Reader
        en: 'Delete this Task',
        zh: '删除该任务',
        es: 'Borre esta tarea',
        ko: '이 과제 삭제',
    },
    'taskHelp': {
        en: 'Mark a task as complete. Pin a task to the main display.',
        zh: '标记任务为已完成，或添加任务到主页面。',
        es: 'Marque una tarea como completada. Ancle una tarea a la pantalla principal.',
        ko: '과제를 완료로 표시. 메인 디스플레이에 과제 고정.',
    },
    'back': {
        en: 'Back',
        zh: '上一页',
        es: 'Regresa',
        ko: '뒤로',
    },
    'next': {
        en: 'Next',
        zh: '下一页',
        es: 'Próxima',
        ko: '다음',
    },
    'skip': {
        en: 'Skip',
        zh: '跳过',
        es: 'Salte',
        ko: '거르기',
    },
    'top': {
        en: 'Back to Top', // ARIA Back to top of the page
        zh: '回到最上方',
        es: 'Vuelva arriba',
        ko: '위로',
    },
    'congratsTitle': {
        en: 'Congratulations!',
        zh: '恭喜',
        es: '¡Felicidades!',
        ko: '축하합니다!',
    },
    'congrats1': {
        en: 'It took you ',
        zh: '你花了总共 ',
        es: '¡Se tomó ',
        ko: '포모도로 ',
    },
    // It took you 5 pomos to finish all of your tasks!
    // Note that congrats1 is the first half of the variable and congrats2 is the second half
    // The ordering of language can be different, so it's up to you where the number goes
    'congrats2': {
        en: ' pomotatoes to finish all of your tasks!', 
        //pomotatoes in English, pomodoros in other languages?
        zh: ' 个土豆来完成所有任务',
        es: 'pomodoros para terminar todas sus tareas!',
        ko: ' 개 만에 모든 작업을 완료했습니다!',
    },
    'potatoDance': {
        en: 'Dancing potato',
        zh: '土豆跳舞',
        es: 'Patata bailando',
        ko: '감자가 추고 있어',
    },
    'pomotato': {
        en: 'Pomotato', // Potato
        zh: '周期土豆',
        es: 'Patata',
        ko: '감자',
    },
    'openInstr': {
        en: 'Open Instructions',
        zh: '打开帮助菜单',
        es: 'Abra las instrucciones',
        ko: '설명 보기',
    },
    'openSettings': {
        en: 'Open Settings',
        zh: '打开设置',
        es: 'Abra la Configuración',
        ko: '설정 열기',
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
