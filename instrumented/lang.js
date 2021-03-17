function cov_1hfye8pj4j() {
  var path = "C:\\Users\\Hane\\Desktop\\CSE110\\GitHubPages\\GitHubPages\\myproj\\cse110-w21-group4\\source\\lang.js";
  var hash = "337ba5b1197714a2cc3f638608bafe8e4fcd7322";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Hane\\Desktop\\CSE110\\GitHubPages\\GitHubPages\\myproj\\cse110-w21-group4\\source\\lang.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 11
        },
        end: {
          line: 484,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "337ba5b1197714a2cc3f638608bafe8e4fcd7322"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1hfye8pj4j = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1hfye8pj4j();
var dict = (cov_1hfye8pj4j().s[0]++, {
  'title': {
    en: 'Potato Timer',
    zh: '土豆计时器',
    es: 'Temporizador de Papa',
    ko: '포테이토 타이머'
  },
  'phase': {
    'work': {
      en: 'work',
      zh: '专注',
      es: 'Trabajo',
      ko: '일하기'
    },
    'short break': {
      en: 'short break',
      zh: '短休息',
      es: 'descanso breve',
      ko: '짧은 휴식기간'
    },
    'long break': {
      en: 'long break',
      zh: '长休息',
      es: 'descanso largo',
      ko: '긴 휴식기간'
    },
    'stopped': {
      en: 'stopped',
      zh: '已停止',
      es: 'parado',
      ko: '중지하기'
    },
    'idle': {
      en: 'idle',
      zh: '空闲',
      es: 'inactivo',
      ko: '쉬는 시간'
    }
  },
  'reset': {
    en: 'Reset',
    zh: '重置',
    es: 'Reiniciar',
    ko: '재설정'
  },
  'start': {
    en: 'Start',
    zh: '开始',
    es: 'Empiezo',
    ko: '시작'
  },
  'stop': {
    en: 'Stop',
    zh: '暂停',
    es: 'Parar',
    ko: '멈춤'
  },
  'tasks': {
    en: 'Tasks',
    zh: '任务',
    es: 'Tareas',
    ko: '과제들'
  },
  'add': {
    en: 'Add',
    zh: '添加',
    es: 'Agregar',
    ko: '추가'
  },
  'enterTask': {
    en: 'Enter a Task To Start',
    zh: '请输入任务来开始使用',
    es: 'Ingresa una tarea para empezar',
    ko: '시작하기 전에 과제가 추가하십시오'
  },
  'deleteAll': {
    en: 'Delete All',
    zh: '全部删除',
    es: 'Borrar Todo',
    ko: '모두 삭제하기'
  },
  'close': {
    en: 'Close',
    zh: '关闭',
    es: 'Cerrar',
    ko: '닫기'
  },
  'settings': {
    en: 'Settings',
    zh: '设置',
    es: 'Configuración',
    ko: '설정'
  },
  'selectTheme': {
    en: 'Select a Theme',
    zh: '选择主题',
    es: 'Seleccionar una Tema',
    ko: '테마 고르기'
  },
  'lightTheme': {
    en: 'Light',
    zh: '亮色',
    es: 'Luz',
    ko: '밝은'
  },
  'darkTheme': {
    en: 'Dark',
    zh: '暗色',
    es: 'Oscuro',
    ko: '어두운'
  },
  'potatoTheme': {
    en: 'Potato',
    zh: '土豆',
    es: 'Papa',
    ko: '감자'
  },
  'workTime': {
    en: 'Work Time',
    zh: '专注时间',
    es: 'Tiempo de Trabajo',
    ko: '일하는 시간'
  },
  'shortBreak': {
    en: 'Short Break',
    zh: '短休息',
    es: 'Descanso Breve',
    ko: '짧은 휴식'
  },
  'longBreak': {
    en: 'Long Break',
    zh: '长休息',
    es: 'Descanso Largo',
    ko: '긴 휴식'
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
    ko: '소리'
  },
  'confirmReset': {
    en: 'Are you sure you want to reset the timer\'s cycle?',
    zh: '确定您要重置时间吗？',
    es: '¿Está seguro de que desea reiniciar el ciclo del temporizador?',
    ko: '재설정을 원하십니까?'
  },
  'confirmDeleteAll': {
    en: 'Are you sure you want to delete all tasks?',
    zh: '确定您要删除所有的任务吗？',
    es: '¿Está seguro de que quiere borrar todas las tareas?',
    ko: '삭제를 원하십니까?'
  },
  'confirm': {
    en: 'Confirm',
    zh: '确认',
    es: 'Confirmar',
    ko: '확인하기'
  },
  'cancel': {
    en: 'Cancel',
    zh: '取消',
    es: 'Cancelar',
    ko: '취소하기'
  },
  '1': {
    'instrTopic': {
      en: 'Introduction',
      zh: '怎样使用',
      es: 'Introducción',
      ko: '소개'
    },
    'instrContent': {
      en: 'Potato Timer is a Pomodoro Timer meant to improve your productivity by having you focus ' + 'for a set "work" time and a following "break" time. After every four work phases, a longer break period occurs.\n' + '若想中文版，请点击右上角设置图标打开菜单。\n' + 'Para cambiar el idioma a español, abra el menú de configuración haciendo clic en el icono de engranaje.\n' + '한국어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n',
      zh: '土豆计时器是一个帮助提高效率的番茄钟定时器，其通过使你专注在特定的工作时间' + '并伴随之后的休息时间。在每四个工作阶段后，将会出现一个长休息时段。\n' + 'To switch to English, click the gear icon to open the settings menu.\n' + 'Para cambiar el idioma a español, abra el menú de configuración haciendo clic en el icono de engranaje.\n' + '한국어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n',
      es: 'El Temporizador de Papa es un temporizador pomodoro destinado a mejorar su productividad al hacer que se concentre ' + 'por un tiempo de "trabajo" establecido y un tiempo de "descanso" siguiente. Después de cada cuatro fases de trabajo, se produce un período de descanso más largo. \n' + 'To switch to English, click the gear icon to open the settings menu.\n' + '若想中文版，请点击右上角设置图标打开菜单\n' + '한국어로 바꾸고 싶다면, 기어 아이콘을 눌러서 설정 메뉴를 열세요.\n',
      ko: '포테이토 타이머는 포모도로 타이머처럼 설정된 "작업"시간과 다음 "휴식"시간에 집중하도록하여 생산성을 향상시킵니다. ' + '네 개의 작업 단계마다 더 긴 휴식 시간이 발생합니다.\n' + 'To switch to English, click the gear icon to open the settings menu.\n' + '若想中文版，请点击右上角设置图标打开菜单\n' + 'Para cambiar el idioma a español, abra el menú de configuración haciendo clic en el icono de engranaje.\n'
    }
  },
  '2': {
    'instrTopic': {
      en: 'Settings',
      zh: '设置',
      es: 'Configuración',
      ko: '설정'
    },
    'instrContent': {
      en: 'To open the settings, click the gear icon in the top right corner.\n' + 'There you can change to minimalist light and dark themes or our fun potato theme. ' + 'In the potato theme, you can disable dancing potatoes if they are too distracting!\n' + 'You can adjust how long you want the timer to run for each phase.\n' + 'You can adjust the volume or click on the icon to mute it.\n' + 'You can change your language to Español, 中文, 한국어.',
      zh: '点击右上角工具图标打开设置菜单。\n' + '随后你将能切换到亮色或暗色模式，以及我们的趣味土豆模式。\n' + '在土豆模式中，如果你觉得被打扰，你可以取消跳舞的土豆动图。\n' + '你可以调整每个周期的长度。\n' + '你可以调整音量或点击图标静音。\n' + '你可以改变语言模式至English, Español，한국어。',
      es: 'Para abrir las configuraciones, haga clic en el icono de engranaje en la esquina superior derecha.\n' + 'Allí puede cambiar la tema a las temas minimalistas de luz or oscuro, o a nuestra tema papa divertida. ' + '¡Puede desactivar las papas danzantes en nuestra tema de papas si le distrean!\n' + 'Puede ajustar cuánto tiempo desea que funcione el temporizador para cada fase.\n' + 'Puede ajustar el volumen o hacer clic en el icono para silenciarlo.\n' + 'Puede ajustar el idioma a inglés, 中文, 한국어.',
      ko: '설정을 열려면 오른쪽 상단에있는 기어 아이콘을 클릭하세요.\n' + '설정에서 최소한의 밝고 어두운 테마 또는 재미있는 감자 테마로 변경할 수 있습니다. ' + '감자 테마에서는 춤추는 감자가 너무 산만하다면 비활성화 할 수 있습니다!\n' + '각 단계에서 타이머를 실행할 시간을 조정할 수 있습니다.\n' + '볼륨을 조절하거나 아이콘을 클릭하여 음소거 할 수 있습니다..\n' + '언어를 English, 中文, Español 로 변경할 수 있습니다.'
    }
  },
  '3': {
    'instrTopic': {
      en: 'Tasks',
      zh: '任务',
      es: 'Tareas',
      ko: '과제'
    },
    'instrContent': {
      en: 'You can enter your own tasks in the white field below the start button. ' + 'To add a task, you may click the add button or press enter. ' + 'One task is automatically pinned to the main page. ' + 'If you want to see all of your tasks, click on the "Tasks" button! ' + 'You can mark tasks as complete by clicking on the circle, ' + 'pin or unpin tasks on the main page, and delete tasks. ' + 'If you mark all tasks as done, the timer ends! Well done!\n' + '*Unfinished tasks are locally stored in your cookies so you can get back to working ' + 'if you return to our website!',
      zh: '您可以在开始按钮下白色区域输入任意任务。' + '您可以点击添加图标或按下回车键来添加任务。' + '第一个任务自动添加至主页面。' + '若您想看到全部任务，点击‘任务’按钮。' + '您可以点击圆圈，标记任务为已完成，' + '也可以置顶或取消置顶任务到主页面，以及删除任务。' + '若您标记所有任务为已完成，计时器将自动停止！\n' + '*未完成的任务将自动存储在缓存记录中，以便于您在回到我们的网页时重回工作模式。',
      es: 'Puede ingresar sus propias tareas en el campo blanco debajo del botón de inicio ' + 'Para agregar una tarea, puede hacer clic en el botón Agregar o presionar Intro. ' + 'Una tarea se fija automáticamente a la página principal. ' + 'Si desea ver todas sus tareas, ¡haga clic en el botón "Tareas"! ' + 'Puede marcar las tareas como completadas haciendo clic en el círculo, ' + 'anclar o desanclar tareas en la página principal, y borrar tareas. ' + 'Si marcas todas las tareas como hechas, ¡el temporizador termina! ¡Bien hecho!\n' + '*Las tareas inconclusas se almacenan localmente en sus cookies para que pueda volver a trabajar ' + 'si regresa a nuestro sitio web!',
      ko: '시작 버튼 아래의 흰색 필드에 자신의 과제를 입력 할 수 있습니다. ' + '과제를 추가하려면 추가 버튼을 클릭하거나 Enter 키를 누릅니다. ' + '한 과제는 자동으로 메인 페이지에 고정됩니다. ' + '모든 과제를 보려면 "과제"버튼을 클릭하십시오! ' + '동그라미를 클릭하여 과제를 완료로 표시 할 수 있고, ' + '메인 페이지에서 과제를 고정 또는 고정 해제하고 작업을 삭제 할 수 있습니다. ' + '모든 과제를 완료로 표시하면 타이머가 종료됩니다! 잘하셨습니다!\n' + '*완료되지 않은 과제는 쿠키에 로컬로 저장되므로 다시 작업 할 수 있습니다 ' + '우리 웹 사이트로 돌아 오시면!'
    }
  },
  '4': {
    'instrTopic': {
      en: 'About',
      zh: '关于',
      es: 'Sobre los Desarrolladores',
      ko: '개발자 소개' // Developer Intro

    },
    'instrContent': {
      en: 'Potato Timer is happily developed by: \n',
      zh: '土豆计时器由以下成员开发：\n',
      es: 'El temporizador de papa está desarrollado por: \n',
      ko: '포테이토 타이머 개발자들: \n'
    }
  },
  'enableAnimation': {
    en: 'Enable Potato Animation',
    zh: '启动土豆特效',
    es: 'Active la animación de papa',
    ko: '감자 애니메이션 활성화'
  },
  'disableAnimation': {
    en: 'Disable Potato Animation',
    zh: '取消土豆特效',
    es: 'Desactive la animación de papa',
    ko: '감자 애니메이션 비활성화'
  },
  'notification': {
    'welcome': {
      en: 'Welcome Back!',
      zh: '欢迎回来',
      es: 'Bienvenido de nuevo!',
      ko: '다시 오신 것을 환영합니다!'
    },
    'mark': {
      en: 'You marked a task as done!',
      zh: '已标记该任务为完成!',
      es: 'Marcó una tarea como hecha!',
      ko: '과제를 완료로 표시했습니다!'
    },
    'unmark': {
      en: 'You marked a task as incomplete!',
      zh: '已标记该任务为未完成!',
      es: 'Marcó una tarea como incompleta!',
      ko: '과제를 미완료로 표시했습니다'
    },
    'addTask': {
      en: 'A task has been added!',
      zh: '该任务已添加!',
      es: 'Se ha agregado una tarea!',
      ko: '과제가 추가됐습니다!'
    },
    'pinTask': {
      en: 'A task has been pinned!',
      zh: '该任务已放置到主页面!',
      es: 'Se ha fijado una tarea!',
      ko: '핀이 추가됐습니다!'
    },
    'unpinTask': {
      en: 'A task has been unpinned!',
      zh: '该任务已被取消置顶!',
      es: 'Se ha desanclado una tarea!',
      ko: '핀을 뺐습니다!'
    },
    'delTask': {
      en: 'A task has been deleted!',
      zh: '该任务已被删除！',
      es: 'Se ha borrado una tarea!',
      ko: '과제를 삭제됐습니다!'
    },
    'deleteAll': {
      en: 'All tasks have been deleted!',
      zh: '所有任务已被删除!',
      es: 'Todas las tareas han sido borradas!',
      ko: '과제를 모두 삭제됐습니다!'
    }
  },
  'help': {
    // aria-label="Show Instructions"
    en: 'Show Instructions',
    zh: '显示帮助菜单',
    es: 'Muestre instrucciones',
    ko: '설명은 보여'
  },
  'instructions': {
    en: 'Instructions',
    zh: '帮助菜单',
    es: 'Instrucciones',
    ko: '설명'
  },
  'settingsIcon': {
    // alt="Show Settings"
    en: 'Show Settings',
    zh: '显示设置菜单',
    es: 'Muestre configuración',
    ko: '설정은 보여' // Subject particle used because these are topics?

  },
  'mute': {
    // Mute volume
    en: 'Mute volume',
    // alt="Mute volume"
    zh: '静音',
    es: 'Silencie volumen',
    ko: '소리를 숨기다'
  },
  'unmute': {
    en: 'Unmute volume',
    zh: '取消静音',
    es: 'Active el volumen',
    ko: '소리를 듣다'
  },
  'markBtn': {
    // ARIA Screen Reader aria-label="Mark as done"
    en: 'Mark as Done',
    zh: '标记为已完成',
    es: 'Marque como hecha',
    ko: '완료로 표시'
  },
  'pinBtn': {
    // ARIA Screen Reader 
    en: 'Pin to the Main Display',
    zh: '添加到主页面展示',
    es: 'Ancle a la pantalla principal',
    ko: '메인 디스플레이에 고정'
  },
  'delBtn': {
    // ARIA Screen Reader
    en: 'Delete this Task',
    zh: '删除该任务',
    es: 'Borre esta tarea',
    ko: '이 과제 삭제'
  },
  'taskHelp': {
    en: 'Mark a task as complete. Pin a task to the main display.',
    zh: '标记任务为已完成，或添加任务到主页面。',
    es: 'Marque una tarea como completada. Ancle una tarea a la pantalla principal.',
    ko: '과제를 완료로 표시. 메인 디스플레이에 과제 고정.'
  },
  'back': {
    en: 'Back',
    zh: '上一页',
    es: 'Regresa',
    ko: '뒤로'
  },
  'next': {
    en: 'Next',
    zh: '下一页',
    es: 'Próxima',
    ko: '다음'
  },
  'skip': {
    en: 'Skip',
    zh: '跳过',
    es: 'Salte',
    ko: '거르기'
  },
  'top': {
    en: 'Back to Top',
    // ARIA Back to top of the page
    zh: '回到最上方',
    es: 'Vuelva arriba',
    ko: '위로'
  },
  'congratsTitle': {
    en: 'Congratulations!',
    zh: '恭喜',
    es: '¡Felicidades!',
    ko: '축하합니다!'
  },
  'congrats1': {
    en: 'It took you ',
    zh: '你花了总共 ',
    es: '¡Se tomó ',
    ko: '포모도로 '
  },
  'congrats2': {
    en: ' pomotatoes to finish all of your tasks!',
    zh: ' 个土豆来完成所有任务',
    es: ' pomodoros para terminar todas sus tareas!',
    ko: ' 개 만에 모든 작업을 완료했습니다!'
  },
  'potatoDance': {
    en: 'Dancing potato',
    zh: '土豆跳舞',
    es: 'Papa bailando',
    ko: '감자가 추고 있어'
  },
  'pomotato': {
    en: 'Pomotato',
    // Potato
    zh: '周期土豆',
    es: 'Papa',
    ko: '감자'
  },
  'openInstr': {
    en: 'Open Instructions',
    zh: '打开帮助菜单',
    es: 'Abra las instrucciones',
    ko: '설명 보기'
  },
  'openSettings': {
    en: 'Open Settings',
    zh: '打开设置',
    es: 'Abra la Configuración',
    ko: '설정 열기'
  },
  '': {
    en: '',
    zh: '',
    es: '',
    ko: ''
  }
}); // Potato Timer             土豆计时器
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmcuanMiXSwibmFtZXMiOlsiZGljdCIsImVuIiwiemgiLCJlcyIsImtvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLElBQUlBLElBQUksNkJBQUc7QUFDUCxXQUFTO0FBQ0xDLElBQUFBLEVBQUUsRUFBRSxjQURDO0FBRUxDLElBQUFBLEVBQUUsRUFBRSxPQUZDO0FBR0xDLElBQUFBLEVBQUUsRUFBRSxzQkFIQztBQUlMQyxJQUFBQSxFQUFFLEVBQUU7QUFKQyxHQURGO0FBT1AsV0FBUztBQUNMLFlBQVE7QUFDSkgsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsRUFBRSxFQUFFLElBRkE7QUFHSkMsTUFBQUEsRUFBRSxFQUFFLFNBSEE7QUFJSkMsTUFBQUEsRUFBRSxFQUFFO0FBSkEsS0FESDtBQU9MLG1CQUFlO0FBQ1hILE1BQUFBLEVBQUUsRUFBRSxhQURPO0FBRVhDLE1BQUFBLEVBQUUsRUFBRSxLQUZPO0FBR1hDLE1BQUFBLEVBQUUsRUFBRSxnQkFITztBQUlYQyxNQUFBQSxFQUFFLEVBQUU7QUFKTyxLQVBWO0FBYUwsa0JBQWM7QUFDVkgsTUFBQUEsRUFBRSxFQUFFLFlBRE07QUFFVkMsTUFBQUEsRUFBRSxFQUFFLEtBRk07QUFHVkMsTUFBQUEsRUFBRSxFQUFFLGdCQUhNO0FBSVZDLE1BQUFBLEVBQUUsRUFBRTtBQUpNLEtBYlQ7QUFtQkwsZUFBVztBQUNQSCxNQUFBQSxFQUFFLEVBQUUsU0FERztBQUVQQyxNQUFBQSxFQUFFLEVBQUUsS0FGRztBQUdQQyxNQUFBQSxFQUFFLEVBQUUsUUFIRztBQUlQQyxNQUFBQSxFQUFFLEVBQUU7QUFKRyxLQW5CTjtBQXlCTCxZQUFRO0FBQ0pILE1BQUFBLEVBQUUsRUFBRSxNQURBO0FBRUpDLE1BQUFBLEVBQUUsRUFBRSxJQUZBO0FBR0pDLE1BQUFBLEVBQUUsRUFBRSxVQUhBO0FBSUpDLE1BQUFBLEVBQUUsRUFB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ZFAsZUFBYTtBQUNUSCxJQUFBQSxFQUFFLEVBQUUsbUJBREs7QUFFVEMsSUFBQUEsRUFBRSxFQUFFLFFBRks7QUFHVEMsSUFBQUEsRUFBRSxFQUFFLHdCQUhLO0FBSVRDLElBQUFBLEVBQUUsRUFBRTtBQUpLLEdBamROO0FBdWRQLGtCQUFnQjtBQUNaSCxJQUFBQSxFQUFFLEVBQUUsZUFEUTtBQUVaQyxJQUFBQSxFQUFFLEVBQUUsTUFGUTtBQUdaQyxJQUFBQSxFQUFFLEVBQUUsdUJBSFE7QUFJWkMsSUFBQUEsRUFBRSxFQUFFO0FBSlEsR0F2ZFQ7QUE2ZFAsTUFBSTtBQUNBSCxJQUFBQSxFQUFFLEVBQUUsRUFESjtBQUVBQyxJQUFBQSxFQUFFLEVBQUUsRUFGSjtBQUdBQyxJQUFBQSxFQUFFLEVBQUUsRUFISjtBQUlBQyxJQUFBQSxFQUFFLEVBQUU7QUFKSjtBQTdkRyxDQUFILENBQVIsQyxDQXFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpY3QgPSB7XHJcbiAgICAndGl0bGUnOiB7XHJcbiAgICAgICAgZW46ICdQb3RhdG8gVGltZXInLFxyXG4gICAgICAgIHpoOiAn5Zyf6LGG6K6h5pe25ZmoJyxcclxuICAgICAgICBlczogJ1RlbXBvcml6YWRvciBkZSBQYXBhJyxcclxuICAgICAgICBrbzogJ+2PrO2FjOydtO2GoCDtg4DsnbTrqLgnXHJcbiAgICB9LFxyXG4gICAgJ3BoYXNlJzoge1xyXG4gICAgICAgICd3b3JrJzoge1xyXG4gICAgICAgICAgICBlbjogJ3dvcmsnLFxyXG4gICAgICAgICAgICB6aDogJ+S4k+azqCcsXHJcbiAgICAgICAgICAgIGVzOiAnVHJhYmFqbycsXHJcbiAgICAgICAgICAgIGtvOiAn7J287ZWY6riwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzaG9ydCBicmVhayc6IHtcclxuICAgICAgICAgICAgZW46ICdzaG9ydCBicmVhaycsXHJcbiAgICAgICAgICAgIHpoOiAn55+t5LyR5oGvJyxcclxuICAgICAgICAgICAgZXM6ICdkZXNjYW5zbyBicmV2ZScsXHJcbiAgICAgICAgICAgIGtvOiAn7Ken7J2AIO2ctOyLneq4sOqwhCcsXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgJ2xvbmcgYnJlYWsnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnbG9uZyBicmVhaycsXHJcbiAgICAgICAgICAgIHpoOiAn6ZW/5LyR5oGvJyxcclxuICAgICAgICAgICAgZXM6ICdkZXNjYW5zbyBsYXJnbycsXHJcbiAgICAgICAgICAgIGtvOiAn6ri0IO2ctOyLneq4sOqwhCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc3RvcHBlZCc6IHtcclxuICAgICAgICAgICAgZW46ICdzdG9wcGVkJyxcclxuICAgICAgICAgICAgemg6ICflt7LlgZzmraInLFxyXG4gICAgICAgICAgICBlczogJ3BhcmFkbycsXHJcbiAgICAgICAgICAgIGtvOiAn7KSR7KeA7ZWY6riwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpZGxlJzoge1xyXG4gICAgICAgICAgICBlbjogJ2lkbGUnLFxyXG4gICAgICAgICAgICB6aDogJ+epuumXsicsXHJcbiAgICAgICAgICAgIGVzOiAnaW5hY3Rpdm8nLFxyXG4gICAgICAgICAgICBrbzogJ+yJrOuKlCDsi5zqsIQnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ3Jlc2V0Jzoge1xyXG4gICAgICAgIGVuOiAnUmVzZXQnLFxyXG4gICAgICAgIHpoOiAn6YeN572uJyxcclxuICAgICAgICBlczogJ1JlaW5pY2lhcicsXHJcbiAgICAgICAga286ICfsnqzshKTsoJUnLFxyXG4gICAgfSxcclxuICAgICdzdGFydCc6IHtcclxuICAgICAgICBlbjogJ1N0YXJ0JyxcclxuICAgICAgICB6aDogJ+W8gOWniycsXHJcbiAgICAgICAgZXM6ICdFbXBpZXpvJyxcclxuICAgICAgICBrbzogJ+yLnOyekScsXHJcbiAgICB9LFxyXG4gICAgJ3N0b3AnOiB7XHJcbiAgICAgICAgZW46ICdTdG9wJyxcclxuICAgICAgICB6aDogJ+aaguWBnCcsXHJcbiAgICAgICAgZXM6ICdQYXJhcicsXHJcbiAgICAgICAga286ICfrqYjstqQnLFxyXG4gICAgfSxcclxuICAgICd0YXNrcyc6IHtcclxuICAgICAgICBlbjogJ1Rhc2tzJyxcclxuICAgICAgICB6aDogJ+S7u+WKoScsXHJcbiAgICAgICAgZXM6ICdUYXJlYXMnLFxyXG4gICAgICAgIGtvOiAn6rO87KCc65OkJyxcclxuICAgIH0sXHJcbiAgICAnYWRkJzoge1xyXG4gICAgICAgIGVuOiAnQWRkJyxcclxuICAgICAgICB6aDogJ+a3u+WKoCcsXHJcbiAgICAgICAgZXM6ICdBZ3JlZ2FyJyxcclxuICAgICAgICBrbzogJ+y2lOqwgCcsXHJcbiAgICB9LFxyXG4gICAgJ2VudGVyVGFzayc6IHtcclxuICAgICAgICBlbjogJ0VudGVyIGEgVGFzayBUbyBTdGFydCcsXHJcbiAgICAgICAgemg6ICfor7fovpPlhaXku7vliqHmnaXlvIDlp4vkvb/nlKgnLFxyXG4gICAgICAgIGVzOiAnSW5ncmVzYSB1bmEgdGFyZWEgcGFyYSBlbXBlemFyJyxcclxuICAgICAgICBrbzogJ+yLnOyeke2VmOq4sCDsoITsl5Ag6rO87KCc6rCAIOy2lOqwgO2VmOyLreyLnOyYpCcsXHJcbiAgICB9LFxyXG4gICAgJ2RlbGV0ZUFsbCc6IHtcclxuICAgICAgICBlbjogJ0RlbGV0ZSBBbGwnLFxyXG4gICAgICAgIHpoOiAn5YWo6YOo5Yig6ZmkJyxcclxuICAgICAgICBlczogJ0JvcnJhciBUb2RvJyxcclxuICAgICAgICBrbzogJ+uqqOuRkCDsgq3soJztlZjquLAnLFxyXG4gICAgfSxcclxuICAgICdjbG9zZSc6IHtcclxuICAgICAgICBlbjogJ0Nsb3NlJyxcclxuICAgICAgICB6aDogJ+WFs+mXrScsXHJcbiAgICAgICAgZXM6ICdDZXJyYXInLFxyXG4gICAgICAgIGtvOiAn64ur6riwJyxcclxuICAgIH0sXHJcbiAgICAnc2V0dGluZ3MnOiB7XHJcbiAgICAgICAgZW46ICdTZXR0aW5ncycsXHJcbiAgICAgICAgemg6ICforr7nva4nLFxyXG4gICAgICAgIGVzOiAnQ29uZmlndXJhY2nDs24nLFxyXG4gICAgICAgIGtvOiAn7ISk7KCVJyxcclxuICAgIH0sXHJcbiAgICAnc2VsZWN0VGhlbWUnOiB7XHJcbiAgICAgICAgZW46ICdTZWxlY3QgYSBUaGVtZScsXHJcbiAgICAgICAgemg6ICfpgInmi6nkuLvpopgnLFxyXG4gICAgICAgIGVzOiAnU2VsZWNjaW9uYXIgdW5hIFRlbWEnLFxyXG4gICAgICAgIGtvOiAn7YWM66eIIOqzoOultOq4sCcsXHJcbiAgICB9LFxyXG4gICAgJ2xpZ2h0VGhlbWUnOiB7XHJcbiAgICAgICAgZW46ICdMaWdodCcsXHJcbiAgICAgICAgemg6ICfkuq7oibInLFxyXG4gICAgICAgIGVzOiAnTHV6JyxcclxuICAgICAgICBrbzogJ+uwneydgCcsXHJcbiAgICB9LFxyXG4gICAgJ2RhcmtUaGVtZSc6IHtcclxuICAgICAgICBlbjogJ0RhcmsnLFxyXG4gICAgICAgIHpoOiAn5pqX6ImyJyxcclxuICAgICAgICBlczogJ09zY3VybycsXHJcbiAgICAgICAga286ICfslrTrkZDsmrQnLFxyXG4gICAgfSxcclxuICAgICdwb3RhdG9UaGVtZSc6IHtcclxuICAgICAgICBlbjogJ1BvdGF0bycsXHJcbiAgICAgICAgemg6ICflnJ/osYYnLFxyXG4gICAgICAgIGVzOiAnUGFwYScsXHJcbiAgICAgICAga286ICfqsJDsnpAnLFxyXG4gICAgfSxcclxuICAgICd3b3JrVGltZSc6IHtcclxuICAgICAgICBlbjogJ1dvcmsgVGltZScsXHJcbiAgICAgICAgemg6ICfkuJPms6jml7bpl7QnLFxyXG4gICAgICAgIGVzOiAnVGllbXBvIGRlIFRyYWJham8nLFxyXG4gICAgICAgIGtvOiAn7J287ZWY64qUIOyLnOqwhCcsXHJcbiAgICB9LFxyXG4gICAgJ3Nob3J0QnJlYWsnOiB7XHJcbiAgICAgICAgZW46ICdTaG9ydCBCcmVhaycsXHJcbiAgICAgICAgemg6ICfnn63kvJHmga8nLFxyXG4gICAgICAgIGVzOiAnRGVzY2Fuc28gQnJldmUnLFxyXG4gICAgICAgIGtvOiAn7Ken7J2AIO2ctOyLnScsXHJcbiAgICB9LFxyXG4gICAgJ2xvbmdCcmVhayc6IHtcclxuICAgICAgICBlbjogJ0xvbmcgQnJlYWsnLFxyXG4gICAgICAgIHpoOiAn6ZW/5LyR5oGvJyxcclxuICAgICAgICBlczogJ0Rlc2NhbnNvIExhcmdvJyxcclxuICAgICAgICBrbzogJ+q4tCDtnLTsi50nLFxyXG4gICAgfSxcclxuICAgIC8vICdjeWNsZUxlbmd0aCc6IHtcclxuICAgIC8vICAgICBlbjogJ0xlbmd0aMKgb2bCoGHCoEN5Y2xlJyxcclxuICAgIC8vICAgICB6aDogJ+WNleS4quWRqOacn+mVv+W6picsXHJcbiAgICAvLyAgICAgZXM6ICcnLFxyXG4gICAgLy8gICAgIGtvOiAn7ZWcIOyCrOydtO2BtOydmCDquLjsnbQnLFxyXG4gICAgLy8gfSxcclxuICAgICd2b2x1bWUnOiB7XHJcbiAgICAgICAgZW46ICdWb2x1bWUnLFxyXG4gICAgICAgIHpoOiAn6Z+z6YePJyxcclxuICAgICAgICBlczogJ1ZvbHVtZW4nLFxyXG4gICAgICAgIGtvOiAn7IaM66asJyxcclxuICAgIH0sXHJcbiAgICAnY29uZmlybVJlc2V0Jzoge1xyXG4gICAgICAgIGVuOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHRoZSB0aW1lclxcJ3MgY3ljbGU/JyxcclxuICAgICAgICB6aDogJ+ehruWumuaCqOimgemHjee9ruaXtumXtOWQl++8nycsXHJcbiAgICAgICAgZXM6ICfCv0VzdMOhIHNlZ3VybyBkZSBxdWUgZGVzZWEgcmVpbmljaWFyIGVsIGNpY2xvIGRlbCB0ZW1wb3JpemFkb3I/JyxcclxuICAgICAgICBrbzogJ+yerOyEpOygleydhCDsm5DtlZjsi63ri4jquYw/JyxcclxuICAgIH0sXHJcbiAgICAnY29uZmlybURlbGV0ZUFsbCc6IHtcclxuICAgICAgICBlbjogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzPycsXHJcbiAgICAgICAgemg6ICfnoa7lrprmgqjopoHliKDpmaTmiYDmnInnmoTku7vliqHlkJfvvJ8nLFxyXG4gICAgICAgIGVzOiAnwr9Fc3TDoSBzZWd1cm8gZGUgcXVlIHF1aWVyZSBib3JyYXIgdG9kYXMgbGFzIHRhcmVhcz8nLFxyXG4gICAgICAgIGtvOiAn7IKt7KCc66W8IOybkO2VmOyLreuLiOq5jD8nLFxyXG4gICAgfSxcclxuICAgICdjb25maXJtJzoge1xyXG4gICAgICAgIGVuOiAnQ29uZmlybScsXHJcbiAgICAgICAgemg6ICfnoa7orqQnLFxyXG4gICAgICAgIGVzOiAnQ29uZmlybWFyJyxcclxuICAgICAgICBrbzogJ+2ZleyduO2VmOq4sCcsXHJcbiAgICB9LFxyXG4gICAgJ2NhbmNlbCc6IHtcclxuICAgICAgICBlbjogJ0NhbmNlbCcsXHJcbiAgICAgICAgemg6ICflj5bmtognLFxyXG4gICAgICAgIGVzOiAnQ2FuY2VsYXInLFxyXG4gICAgICAgIGtvOiAn7Leo7IaM7ZWY6riwJyxcclxuICAgIH0sXHJcbiAgICAnMSc6IHtcclxuICAgICAgICAnaW5zdHJUb3BpYyc6IHtcclxuICAgICAgICAgICAgZW46ICdJbnRyb2R1Y3Rpb24nLFxyXG4gICAgICAgICAgICB6aDogJ+aAjuagt+S9v+eUqCcsXHJcbiAgICAgICAgICAgIGVzOiAnSW50cm9kdWNjacOzbicsXHJcbiAgICAgICAgICAgIGtvOiAn7IaM6rCcJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnUG90YXRvIFRpbWVyIGlzIGEgUG9tb2Rvcm8gVGltZXIgbWVhbnQgdG8gaW1wcm92ZSB5b3VyIHByb2R1Y3Rpdml0eSBieSBoYXZpbmcgeW91IGZvY3VzICcgK1xyXG4gICAgICAgICAgICAgICAgJ2ZvciBhIHNldCBcIndvcmtcIiB0aW1lIGFuZCBhIGZvbGxvd2luZyBcImJyZWFrXCIgdGltZS4gQWZ0ZXIgZXZlcnkgZm91ciB3b3JrIHBoYXNlcywgYSBsb25nZXIgYnJlYWsgcGVyaW9kIG9jY3Vycy5cXG4nICtcclxuICAgICAgICAgICAgICAgICfoi6Xmg7PkuK3mlofniYjvvIzor7fngrnlh7vlj7PkuIrop5Lorr7nva7lm77moIfmiZPlvIDoj5zljZXjgIJcXG4nICtcclxuICAgICAgICAgICAgICAgICdQYXJhIGNhbWJpYXIgZWwgaWRpb21hIGEgZXNwYcOxb2wsIGFicmEgZWwgbWVuw7ogZGUgY29uZmlndXJhY2nDs24gaGFjaWVuZG8gY2xpYyBlbiBlbCBpY29ubyBkZSBlbmdyYW5hamUuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAn7ZWc6rWt7Ja066GcIOuwlOq+uOqzoCDsi7bri6TrqbQsIOq4sOyWtCDslYTsnbTsvZjsnYQg64iM65+s7IScIOyEpOyglSDrqZTribTrpbwg7Je07IS47JqULlxcbicsXHJcbiAgICAgICAgICAgIHpoOiAn5Zyf6LGG6K6h5pe25Zmo5piv5LiA5Liq5biu5Yqp5o+Q6auY5pWI546H55qE55Wq6IyE6ZKf5a6a5pe25Zmo77yM5YW26YCa6L+H5L2/5L2g5LiT5rOo5Zyo54m55a6a55qE5bel5L2c5pe26Ze0JyArXHJcbiAgICAgICAgICAgICAgICAn5bm25Ly06ZqP5LmL5ZCO55qE5LyR5oGv5pe26Ze044CC5Zyo5q+P5Zub5Liq5bel5L2c6Zi25q615ZCO77yM5bCG5Lya5Ye6546w5LiA5Liq6ZW/5LyR5oGv5pe25q6144CCXFxuJytcclxuICAgICAgICAgICAgICAgICdUbyBzd2l0Y2ggdG8gRW5nbGlzaCwgY2xpY2sgdGhlIGdlYXIgaWNvbiB0byBvcGVuIHRoZSBzZXR0aW5ncyBtZW51LlxcbicgKyBcclxuICAgICAgICAgICAgICAgICdQYXJhIGNhbWJpYXIgZWwgaWRpb21hIGEgZXNwYcOxb2wsIGFicmEgZWwgbWVuw7ogZGUgY29uZmlndXJhY2nDs24gaGFjaWVuZG8gY2xpYyBlbiBlbCBpY29ubyBkZSBlbmdyYW5hamUuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAn7ZWc6rWt7Ja066GcIOuwlOq+uOqzoCDsi7bri6TrqbQsIOq4sOyWtCDslYTsnbTsvZjsnYQg64iM65+s7IScIOyEpOyglSDrqZTribTrpbwg7Je07IS47JqULlxcbicsXHJcbiAgICAgICAgICAgIGVzOiAnRWwgVGVtcG9yaXphZG9yIGRlIFBhcGEgZXMgdW4gdGVtcG9yaXphZG9yIHBvbW9kb3JvIGRlc3RpbmFkbyBhIG1lam9yYXIgc3UgcHJvZHVjdGl2aWRhZCBhbCBoYWNlciBxdWUgc2UgY29uY2VudHJlICcgKyBcclxuICAgICAgICAgICAgICAgICdwb3IgdW4gdGllbXBvIGRlIFwidHJhYmFqb1wiIGVzdGFibGVjaWRvIHkgdW4gdGllbXBvIGRlIFwiZGVzY2Fuc29cIiBzaWd1aWVudGUuIERlc3B1w6lzIGRlIGNhZGEgY3VhdHJvIGZhc2VzIGRlIHRyYWJham8sIHNlIHByb2R1Y2UgdW4gcGVyw61vZG8gZGUgZGVzY2Fuc28gbcOhcyBsYXJnby4gXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnVG8gc3dpdGNoIHRvIEVuZ2xpc2gsIGNsaWNrIHRoZSBnZWFyIGljb24gdG8gb3BlbiB0aGUgc2V0dGluZ3MgbWVudS5cXG4nICtcclxuICAgICAgICAgICAgICAgICfoi6Xmg7PkuK3mlofniYjvvIzor7fngrnlh7vlj7PkuIrop5Lorr7nva7lm77moIfmiZPlvIDoj5zljZVcXG4nICtcclxuICAgICAgICAgICAgICAgICftlZzqta3slrTroZwg67CU6r646rOgIOyLtuuLpOuptCwg6riw7Ja0IOyVhOydtOy9mOydhCDriIzrn6zshJwg7ISk7KCVIOuplOuJtOulvCDsl7TshLjsmpQuXFxuJyxcclxuICAgICAgICAgICAga286ICftj6zthYzsnbTthqAg7YOA7J2066i464qUIO2PrOuqqOuPhOuhnCDtg4DsnbTrqLjsspjrn7wg7ISk7KCV65CcIFwi7J6R7JeFXCLsi5zqsITqs7wg64uk7J2MIFwi7Zy07IudXCLsi5zqsITsl5Ag7KeR7KSR7ZWY64+E66Gd7ZWY7JesIOyDneyCsOyEseydhCDtlqXsg4Hsi5ztgrXri4jri6QuICcgK1xyXG4gICAgICAgICAgICAgICAgJ+uEpCDqsJzsnZgg7J6R7JeFIOuLqOqzhOuniOuLpCDrjZQg6ri0IO2ctOyLnSDsi5zqsITsnbQg67Cc7IOd7ZWp64uI64ukLlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ1RvIHN3aXRjaCB0byBFbmdsaXNoLCBjbGljayB0aGUgZ2VhciBpY29uIHRvIG9wZW4gdGhlIHNldHRpbmdzIG1lbnUuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAn6Iul5oOz5Lit5paH54mI77yM6K+354K55Ye75Y+z5LiK6KeS6K6+572u5Zu+5qCH5omT5byA6I+c5Y2VXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnUGFyYSBjYW1iaWFyIGVsIGlkaW9tYSBhIGVzcGHDsW9sLCBhYnJhIGVsIG1lbsO6IGRlIGNvbmZpZ3VyYWNpw7NuIGhhY2llbmRvIGNsaWMgZW4gZWwgaWNvbm8gZGUgZW5ncmFuYWplLlxcbicsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnMic6IHtcclxuICAgICAgICAnaW5zdHJUb3BpYyc6IHtcclxuICAgICAgICAgICAgZW46ICdTZXR0aW5ncycsXHJcbiAgICAgICAgICAgIHpoOiAn6K6+572uJyxcclxuICAgICAgICAgICAgZXM6ICdDb25maWd1cmFjacOzbicsXHJcbiAgICAgICAgICAgIGtvOiAn7ISk7KCVJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnVG8gb3BlbiB0aGUgc2V0dGluZ3MsIGNsaWNrIHRoZSBnZWFyIGljb24gaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuXFxuJyArIFxyXG4gICAgICAgICAgICAgICAgJ1RoZXJlIHlvdSBjYW4gY2hhbmdlIHRvIG1pbmltYWxpc3QgbGlnaHQgYW5kIGRhcmsgdGhlbWVzIG9yIG91ciBmdW4gcG90YXRvIHRoZW1lLiAnICtcclxuICAgICAgICAgICAgICAgICdJbiB0aGUgcG90YXRvIHRoZW1lLCB5b3UgY2FuIGRpc2FibGUgZGFuY2luZyBwb3RhdG9lcyBpZiB0aGV5IGFyZSB0b28gZGlzdHJhY3RpbmchXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBhZGp1c3QgaG93IGxvbmcgeW91IHdhbnQgdGhlIHRpbWVyIHRvIHJ1biBmb3IgZWFjaCBwaGFzZS5cXG4nICtcclxuICAgICAgICAgICAgICAgICdZb3UgY2FuIGFkanVzdCB0aGUgdm9sdW1lIG9yIGNsaWNrIG9uIHRoZSBpY29uIHRvIG11dGUgaXQuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBjaGFuZ2UgeW91ciBsYW5ndWFnZSB0byBFc3Bhw7FvbCwg5Lit5paHLCDtlZzqta3slrQuJyxcclxuICAgICAgICAgICAgemg6ICfngrnlh7vlj7PkuIrop5Llt6Xlhbflm77moIfmiZPlvIDorr7nva7oj5zljZXjgIJcXG4nK1xyXG4gICAgICAgICAgICAgICAgJ+maj+WQjuS9oOWwhuiDveWIh+aNouWIsOS6ruiJsuaIluaal+iJsuaooeW8j++8jOS7peWPiuaIkeS7rOeahOi2o+WRs+Wcn+ixhuaooeW8j+OAglxcbicrXHJcbiAgICAgICAgICAgICAgICAn5Zyo5Zyf6LGG5qih5byP5Lit77yM5aaC5p6c5L2g6KeJ5b6X6KKr5omT5omw77yM5L2g5Y+v5Lul5Y+W5raI6Lez6Iie55qE5Zyf6LGG5Yqo5Zu+44CCXFxuJytcclxuICAgICAgICAgICAgICAgICfkvaDlj6/ku6XosIPmlbTmr4/kuKrlkajmnJ/nmoTplb/luqbjgIJcXG4nK1xyXG4gICAgICAgICAgICAgICAgJ+S9oOWPr+S7peiwg+aVtOmfs+mHj+aIlueCueWHu+Wbvuagh+mdmemfs+OAglxcbicrXHJcbiAgICAgICAgICAgICAgICAn5L2g5Y+v5Lul5pS55Y+Y6K+t6KiA5qih5byP6IezRW5nbGlzaCwgRXNwYcOxb2zvvIztlZzqta3slrTjgIInLFxyXG4gICAgICAgICAgICBlczogJ1BhcmEgYWJyaXIgbGFzIGNvbmZpZ3VyYWNpb25lcywgaGFnYSBjbGljIGVuIGVsIGljb25vIGRlIGVuZ3JhbmFqZSBlbiBsYSBlc3F1aW5hIHN1cGVyaW9yIGRlcmVjaGEuXFxuJyArIFxyXG4gICAgICAgICAgICAgICAgJ0FsbMOtIHB1ZWRlIGNhbWJpYXIgbGEgdGVtYSBhIGxhcyB0ZW1hcyBtaW5pbWFsaXN0YXMgZGUgbHV6IG9yIG9zY3VybywgbyBhIG51ZXN0cmEgdGVtYSBwYXBhIGRpdmVydGlkYS4gJyArXHJcbiAgICAgICAgICAgICAgICAnwqFQdWVkZSBkZXNhY3RpdmFyIGxhcyBwYXBhcyBkYW56YW50ZXMgZW4gbnVlc3RyYSB0ZW1hIGRlIHBhcGFzIHNpIGxlIGRpc3RyZWFuIVxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ1B1ZWRlIGFqdXN0YXIgY3XDoW50byB0aWVtcG8gZGVzZWEgcXVlIGZ1bmNpb25lIGVsIHRlbXBvcml6YWRvciBwYXJhIGNhZGEgZmFzZS5cXG4nICtcclxuICAgICAgICAgICAgICAgICdQdWVkZSBhanVzdGFyIGVsIHZvbHVtZW4gbyBoYWNlciBjbGljIGVuIGVsIGljb25vIHBhcmEgc2lsZW5jaWFybG8uXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnUHVlZGUgYWp1c3RhciBlbCBpZGlvbWEgYSBpbmdsw6lzLCDkuK3mlocsIO2VnOq1reyWtC4nLFxyXG4gICAgICAgICAgICBrbzogJ+yEpOygleydhCDsl7TroKTrqbQg7Jik66W47Kq9IOyDgeuLqOyXkOyeiOuKlCDquLDslrQg7JWE7J207L2Y7J2EIO2BtOumre2VmOyEuOyalC5cXG4nICsgXHJcbiAgICAgICAgICAgICAgICAn7ISk7KCV7JeQ7IScIOy1nOyGjO2VnOydmCDrsJ3qs6Ag7Ja065GQ7Jq0IO2FjOuniCDrmJDripQg7J6s66+47J6I64qUIOqwkOyekCDthYzrp4jroZwg67OA6rK97ZWgIOyImCDsnojsirXri4jri6QuICcgK1xyXG4gICAgICAgICAgICAgICAgJ+qwkOyekCDthYzrp4jsl5DshJzripQg7Lak7LaU64qUIOqwkOyekOqwgCDrhIjrrLQg7IKw66eM7ZWY64uk66m0IOu5hO2ZnOyEse2ZlCDtlaAg7IiYIOyeiOyKteuLiOuLpCFcXG4nICtcclxuICAgICAgICAgICAgICAgICfqsIEg64uo6rOE7JeQ7IScIO2DgOydtOuouOulvCDsi6TtlontlaAg7Iuc6rCE7J2EIOyhsOygle2VoCDsiJgg7J6I7Iq164uI64ukLlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ+uzvOulqOydhCDsobDsoIjtlZjqsbDrgpgg7JWE7J207L2Y7J2EIO2BtOumre2VmOyXrCDsnYzshozqsbAg7ZWgIOyImCDsnojsirXri4jri6QuLlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ+yWuOyWtOulvCBFbmdsaXNoLCDkuK3mlocsIEVzcGHDsW9sIOuhnCDrs4Dqsr3tlaAg7IiYIOyeiOyKteuLiOuLpC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgfSxcclxuICAgICczJzoge1xyXG4gICAgICAgICdpbnN0clRvcGljJzoge1xyXG4gICAgICAgICAgICBlbjogJ1Rhc2tzJyxcclxuICAgICAgICAgICAgemg6ICfku7vliqEnLFxyXG4gICAgICAgICAgICBlczogJ1RhcmVhcycsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCcJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnWW91IGNhbiBlbnRlciB5b3VyIG93biB0YXNrcyBpbiB0aGUgd2hpdGUgZmllbGQgYmVsb3cgdGhlIHN0YXJ0IGJ1dHRvbi4gJyArXHJcbiAgICAgICAgICAgICAgICAnVG8gYWRkIGEgdGFzaywgeW91IG1heSBjbGljayB0aGUgYWRkIGJ1dHRvbiBvciBwcmVzcyBlbnRlci4gJyArXHJcbiAgICAgICAgICAgICAgICAnT25lIHRhc2sgaXMgYXV0b21hdGljYWxseSBwaW5uZWQgdG8gdGhlIG1haW4gcGFnZS4gJyArXHJcbiAgICAgICAgICAgICAgICAnSWYgeW91IHdhbnQgdG8gc2VlIGFsbCBvZiB5b3VyIHRhc2tzLCBjbGljayBvbiB0aGUgXCJUYXNrc1wiIGJ1dHRvbiEgJyArXHJcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBtYXJrIHRhc2tzIGFzIGNvbXBsZXRlIGJ5IGNsaWNraW5nIG9uIHRoZSBjaXJjbGUsICcgK1xyXG4gICAgICAgICAgICAgICAgJ3BpbiBvciB1bnBpbiB0YXNrcyBvbiB0aGUgbWFpbiBwYWdlLCBhbmQgZGVsZXRlIHRhc2tzLiAnICtcclxuICAgICAgICAgICAgICAgICdJZiB5b3UgbWFyayBhbGwgdGFza3MgYXMgZG9uZSwgdGhlIHRpbWVyIGVuZHMhIFdlbGwgZG9uZSFcXG4nICsgXHJcbiAgICAgICAgICAgICAgICAnKlVuZmluaXNoZWQgdGFza3MgYXJlIGxvY2FsbHkgc3RvcmVkIGluIHlvdXIgY29va2llcyBzbyB5b3UgY2FuIGdldCBiYWNrIHRvIHdvcmtpbmcgJyArXHJcbiAgICAgICAgICAgICAgICAnaWYgeW91IHJldHVybiB0byBvdXIgd2Vic2l0ZSEnLFxyXG4gICAgICAgICAgICB6aDogJ+aCqOWPr+S7peWcqOW8gOWni+aMiemSruS4i+eZveiJsuWMuuWfn+i+k+WFpeS7u+aEj+S7u+WKoeOAgicgK1xyXG4gICAgICAgICAgICAgICAgJ+aCqOWPr+S7peeCueWHu+a3u+WKoOWbvuagh+aIluaMieS4i+Wbnui9pumUruadpea3u+WKoOS7u+WKoeOAgicrXHJcbiAgICAgICAgICAgICAgICAn56ys5LiA5Liq5Lu75Yqh6Ieq5Yqo5re75Yqg6Iez5Li76aG16Z2i44CCJytcclxuICAgICAgICAgICAgICAgICfoi6Xmgqjmg7PnnIvliLDlhajpg6jku7vliqHvvIzngrnlh7vigJjku7vliqHigJnmjInpkq7jgIInK1xyXG4gICAgICAgICAgICAgICAgJ+aCqOWPr+S7peeCueWHu+WchuWciO+8jOagh+iusOS7u+WKoeS4uuW3suWujOaIkO+8jCcrXHJcbiAgICAgICAgICAgICAgICAn5Lmf5Y+v5Lul572u6aG25oiW5Y+W5raI572u6aG25Lu75Yqh5Yiw5Li76aG16Z2i77yM5Lul5Y+K5Yig6Zmk5Lu75Yqh44CCJytcclxuICAgICAgICAgICAgICAgICfoi6XmgqjmoIforrDmiYDmnInku7vliqHkuLrlt7LlrozmiJDvvIzorqHml7blmajlsIboh6rliqjlgZzmraLvvIFcXG4nK1xyXG4gICAgICAgICAgICAgICAgJyrmnKrlrozmiJDnmoTku7vliqHlsIboh6rliqjlrZjlgqjlnKjnvJPlrZjorrDlvZXkuK3vvIzku6Xkvr/kuo7mgqjlnKjlm57liLDmiJHku6znmoTnvZHpobXml7bph43lm57lt6XkvZzmqKHlvI/jgIInLFxyXG4gICAgICAgICAgICBlczogJ1B1ZWRlIGluZ3Jlc2FyIHN1cyBwcm9waWFzIHRhcmVhcyBlbiBlbCBjYW1wbyBibGFuY28gZGViYWpvIGRlbCBib3TDs24gZGUgaW5pY2lvICcgK1xyXG4gICAgICAgICAgICAgICAgJ1BhcmEgYWdyZWdhciB1bmEgdGFyZWEsIHB1ZWRlIGhhY2VyIGNsaWMgZW4gZWwgYm90w7NuIEFncmVnYXIgbyBwcmVzaW9uYXIgSW50cm8uICcgK1xyXG4gICAgICAgICAgICAgICAgJ1VuYSB0YXJlYSBzZSBmaWphIGF1dG9tw6F0aWNhbWVudGUgYSBsYSBww6FnaW5hIHByaW5jaXBhbC4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2kgZGVzZWEgdmVyIHRvZGFzIHN1cyB0YXJlYXMsIMKhaGFnYSBjbGljIGVuIGVsIGJvdMOzbiBcIlRhcmVhc1wiISAnICtcclxuICAgICAgICAgICAgICAgICdQdWVkZSBtYXJjYXIgbGFzIHRhcmVhcyBjb21vIGNvbXBsZXRhZGFzIGhhY2llbmRvIGNsaWMgZW4gZWwgY8OtcmN1bG8sICcgK1xyXG4gICAgICAgICAgICAgICAgJ2FuY2xhciBvIGRlc2FuY2xhciB0YXJlYXMgZW4gbGEgcMOhZ2luYSBwcmluY2lwYWwsIHkgYm9ycmFyIHRhcmVhcy4gJyArXHJcbiAgICAgICAgICAgICAgICAnU2kgbWFyY2FzIHRvZGFzIGxhcyB0YXJlYXMgY29tbyBoZWNoYXMsIMKhZWwgdGVtcG9yaXphZG9yIHRlcm1pbmEhIMKhQmllbiBoZWNobyFcXG4nICsgXHJcbiAgICAgICAgICAgICAgICAnKkxhcyB0YXJlYXMgaW5jb25jbHVzYXMgc2UgYWxtYWNlbmFuIGxvY2FsbWVudGUgZW4gc3VzIGNvb2tpZXMgcGFyYSBxdWUgcHVlZGEgdm9sdmVyIGEgdHJhYmFqYXIgJyArXHJcbiAgICAgICAgICAgICAgICAnc2kgcmVncmVzYSBhIG51ZXN0cm8gc2l0aW8gd2ViIScsXHJcbiAgICAgICAgICAgIGtvOiAn7Iuc7J6RIOuyhO2KvCDslYTrnpjsnZgg7Z2w7IOJIO2VhOuTnOyXkCDsnpDsi6DsnZgg6rO87KCc66W8IOyeheugpSDtlaAg7IiYIOyeiOyKteuLiOuLpC4gJyArXHJcbiAgICAgICAgICAgICAgICAn6rO87KCc66W8IOy2lOqwgO2VmOugpOuptCDstpTqsIAg67KE7Yq87J2EIO2BtOumre2VmOqxsOuCmCBFbnRlciDtgqTrpbwg64iE66aF64uI64ukLiAnICtcclxuICAgICAgICAgICAgICAgICftlZwg6rO87KCc64qUIOyekOuPmeycvOuhnCDrqZTsnbgg7Y6Y7J207KeA7JeQIOqzoOygleuQqeuLiOuLpC4gJyArXHJcbiAgICAgICAgICAgICAgICAn66qo65OgIOqzvOygnOulvCDrs7TroKTrqbQgXCLqs7zsoJxcIuuyhO2KvOydhCDtgbTrpq3tlZjsi63si5zsmKQhICcgK1xyXG4gICAgICAgICAgICAgICAgJ+uPmeq3uOudvOuvuOulvCDtgbTrpq3tlZjsl6wg6rO87KCc66W8IOyZhOujjOuhnCDtkZzsi5wg7ZWgIOyImCDsnojqs6AsICcgK1xyXG4gICAgICAgICAgICAgICAgJ+uplOyduCDtjpjsnbTsp4Dsl5DshJwg6rO87KCc66W8IOqzoOyglSDrmJDripQg6rOg7KCVIO2VtOygnO2VmOqzoCDsnpHsl4XsnYQg7IKt7KCcIO2VoCDsiJgg7J6I7Iq164uI64ukLiAnICtcclxuICAgICAgICAgICAgICAgICfrqqjrk6Ag6rO87KCc66W8IOyZhOujjOuhnCDtkZzsi5ztlZjrqbQg7YOA7J2066i46rCAIOyiheujjOuQqeuLiOuLpCEg7J6Y7ZWY7IWo7Iq164uI64ukIVxcbicgKyBcclxuICAgICAgICAgICAgICAgICcq7JmE66OM65CY7KeAIOyViuydgCDqs7zsoJzripQg7L+g7YKk7JeQIOuhnOy7rOuhnCDsoIDsnqXrkJjrr4DroZwg64uk7IucIOyekeyXhSDtlaAg7IiYIOyeiOyKteuLiOuLpCAnICtcclxuICAgICAgICAgICAgICAgICfsmrDrpqwg7Ju5IOyCrOydtO2KuOuhnCDrj4zslYQg7Jik7Iuc66m0IScsXHJcbiAgICAgICAgfSxcclxuICAgICB9LFxyXG4gICAgJzQnOiB7XHJcbiAgICAgICAgJ2luc3RyVG9waWMnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnQWJvdXQnLFxyXG4gICAgICAgICAgICB6aDogJ+WFs+S6jicsXHJcbiAgICAgICAgICAgIGVzOiAnU29icmUgbG9zIERlc2Fycm9sbGFkb3JlcycsXHJcbiAgICAgICAgICAgIGtvOiAn6rCc67Cc7J6QIOyGjOqwnCcsIC8vIERldmVsb3BlciBJbnRyb1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2luc3RyQ29udGVudCc6IHtcclxuICAgICAgICAgICAgZW46ICdQb3RhdG8gVGltZXIgaXMgaGFwcGlseSBkZXZlbG9wZWQgYnk6IFxcbicsXHJcbiAgICAgICAgICAgIHpoOiAn5Zyf6LGG6K6h5pe25Zmo55Sx5Lul5LiL5oiQ5ZGY5byA5Y+R77yaXFxuJyxcclxuICAgICAgICAgICAgZXM6ICdFbCB0ZW1wb3JpemFkb3IgZGUgcGFwYSBlc3TDoSBkZXNhcnJvbGxhZG8gcG9yOiBcXG4nLFxyXG4gICAgICAgICAgICBrbzogJ+2PrO2FjOydtO2GoCDtg4DsnbTrqLgg6rCc67Cc7J6Q65OkOiBcXG4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgfSxcclxuICAgICdlbmFibGVBbmltYXRpb24nOiB7XHJcbiAgICAgICAgZW46ICdFbmFibGUgUG90YXRvIEFuaW1hdGlvbicsXHJcbiAgICAgICAgemg6ICflkK/liqjlnJ/osYbnibnmlYgnLFxyXG4gICAgICAgIGVzOiAnQWN0aXZlIGxhIGFuaW1hY2nDs24gZGUgcGFwYScsXHJcbiAgICAgICAga286ICfqsJDsnpAg7JWg64uI66mU7J207IWYIO2ZnOyEse2ZlCcsXHJcbiAgICB9LFxyXG4gICAgJ2Rpc2FibGVBbmltYXRpb24nOiB7XHJcbiAgICAgICAgZW46ICdEaXNhYmxlIFBvdGF0byBBbmltYXRpb24nLFxyXG4gICAgICAgIHpoOiAn5Y+W5raI5Zyf6LGG54m55pWIJyxcclxuICAgICAgICBlczogJ0Rlc2FjdGl2ZSBsYSBhbmltYWNpw7NuIGRlIHBhcGEnLFxyXG4gICAgICAgIGtvOiAn6rCQ7J6QIOyVoOuLiOuplOydtOyFmCDruYTtmZzshLHtmZQnLFxyXG4gICAgfSxcclxuICAgICdub3RpZmljYXRpb24nOiB7XHJcbiAgICAgICAgJ3dlbGNvbWUnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnV2VsY29tZSBCYWNrIScsXHJcbiAgICAgICAgICAgIHpoOiAn5qyi6L+O5Zue5p2lJyxcclxuICAgICAgICAgICAgZXM6ICdCaWVudmVuaWRvIGRlIG51ZXZvIScsXHJcbiAgICAgICAgICAgIGtvOiAn64uk7IucIOyYpOyLoCDqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbWFyayc6IHtcclxuICAgICAgICAgICAgZW46ICdZb3UgbWFya2VkIGEgdGFzayBhcyBkb25lIScsXHJcbiAgICAgICAgICAgIHpoOiAn5bey5qCH6K6w6K+l5Lu75Yqh5Li65a6M5oiQIScsXHJcbiAgICAgICAgICAgIGVzOiAnTWFyY8OzIHVuYSB0YXJlYSBjb21vIGhlY2hhIScsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc66W8IOyZhOujjOuhnCDtkZzsi5ztlojsirXri4jri6QhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICd1bm1hcmsnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnWW91IG1hcmtlZCBhIHRhc2sgYXMgaW5jb21wbGV0ZSEnLFxyXG4gICAgICAgICAgICB6aDogJ+W3suagh+iusOivpeS7u+WKoeS4uuacquWujOaIkCEnLFxyXG4gICAgICAgICAgICBlczogJ01hcmPDsyB1bmEgdGFyZWEgY29tbyBpbmNvbXBsZXRhIScsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc66W8IOuvuOyZhOujjOuhnCDtkZzsi5ztlojsirXri4jri6QnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2FkZFRhc2snOiB7XHJcbiAgICAgICAgICAgIGVuOiAnQSB0YXNrIGhhcyBiZWVuIGFkZGVkIScsXHJcbiAgICAgICAgICAgIHpoOiAn6K+l5Lu75Yqh5bey5re75YqgIScsXHJcbiAgICAgICAgICAgIGVzOiAnU2UgaGEgYWdyZWdhZG8gdW5hIHRhcmVhIScsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc6rCAIOy2lOqwgOuQkOyKteuLiOuLpCEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3BpblRhc2snOiB7XHJcbiAgICAgICAgICAgIGVuOiAnQSB0YXNrIGhhcyBiZWVuIHBpbm5lZCEnLFxyXG4gICAgICAgICAgICB6aDogJ+ivpeS7u+WKoeW3suaUvue9ruWIsOS4u+mhtemdoiEnLFxyXG4gICAgICAgICAgICBlczogJ1NlIGhhIGZpamFkbyB1bmEgdGFyZWEhJyxcclxuICAgICAgICAgICAga286ICftlYDsnbQg7LaU6rCA65CQ7Iq164uI64ukIScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAndW5waW5UYXNrJzoge1xyXG4gICAgICAgICAgICBlbjogJ0EgdGFzayBoYXMgYmVlbiB1bnBpbm5lZCEnLFxyXG4gICAgICAgICAgICB6aDogJ+ivpeS7u+WKoeW3suiiq+WPlua2iOe9rumhtiEnLFxyXG4gICAgICAgICAgICBlczogJ1NlIGhhIGRlc2FuY2xhZG8gdW5hIHRhcmVhIScsXHJcbiAgICAgICAgICAgIGtvOiAn7ZWA7J2EIOu6kOyKteuLiOuLpCEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbFRhc2snOiB7XHJcbiAgICAgICAgICAgIGVuOiAnQSB0YXNrIGhhcyBiZWVuIGRlbGV0ZWQhJyxcclxuICAgICAgICAgICAgemg6ICfor6Xku7vliqHlt7LooqvliKDpmaTvvIEnLFxyXG4gICAgICAgICAgICBlczogJ1NlIGhhIGJvcnJhZG8gdW5hIHRhcmVhIScsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc66W8IOyCreygnOuQkOyKteuLiOuLpCEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RlbGV0ZUFsbCc6IHtcclxuICAgICAgICAgICAgZW46ICdBbGwgdGFza3MgaGF2ZSBiZWVuIGRlbGV0ZWQhJyxcclxuICAgICAgICAgICAgemg6ICfmiYDmnInku7vliqHlt7LooqvliKDpmaQhJyxcclxuICAgICAgICAgICAgZXM6ICdUb2RhcyBsYXMgdGFyZWFzIGhhbiBzaWRvIGJvcnJhZGFzIScsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc66W8IOuqqOuRkCDsgq3soJzrkJDsirXri4jri6QhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgICdoZWxwJzogeyAvLyBhcmlhLWxhYmVsPVwiU2hvdyBJbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgIGVuOiAnU2hvdyBJbnN0cnVjdGlvbnMnLFxyXG4gICAgICAgIHpoOiAn5pi+56S65biu5Yqp6I+c5Y2VJyxcclxuICAgICAgICBlczogJ011ZXN0cmUgaW5zdHJ1Y2Npb25lcycsXHJcbiAgICAgICAga286ICfshKTrqoXsnYAg67O07JesJyxcclxuICAgIH0sXHJcbiAgICAnaW5zdHJ1Y3Rpb25zJzoge1xyXG4gICAgICAgIGVuOiAnSW5zdHJ1Y3Rpb25zJyxcclxuICAgICAgICB6aDogJ+W4ruWKqeiPnOWNlScsXHJcbiAgICAgICAgZXM6ICdJbnN0cnVjY2lvbmVzJyxcclxuICAgICAgICBrbzogJ+yEpOuqhScsXHJcbiAgICB9LFxyXG4gICAgJ3NldHRpbmdzSWNvbic6IHsgLy8gYWx0PVwiU2hvdyBTZXR0aW5nc1wiXHJcbiAgICAgICAgZW46ICdTaG93IFNldHRpbmdzJyxcclxuICAgICAgICB6aDogJ+aYvuekuuiuvue9ruiPnOWNlScsXHJcbiAgICAgICAgZXM6ICdNdWVzdHJlIGNvbmZpZ3VyYWNpw7NuJyxcclxuICAgICAgICBrbzogJ+yEpOygleydgCDrs7Tsl6wnLCAvLyBTdWJqZWN0IHBhcnRpY2xlIHVzZWQgYmVjYXVzZSB0aGVzZSBhcmUgdG9waWNzP1xyXG4gICAgfSxcclxuICAgICdtdXRlJzogeyAvLyBNdXRlIHZvbHVtZVxyXG4gICAgICAgIGVuOiAnTXV0ZSB2b2x1bWUnLCAvLyBhbHQ9XCJNdXRlIHZvbHVtZVwiXHJcbiAgICAgICAgemg6ICfpnZnpn7MnLFxyXG4gICAgICAgIGVzOiAnU2lsZW5jaWUgdm9sdW1lbicsXHJcbiAgICAgICAga286ICfshozrpqzrpbwg7Iio6riw64ukJyxcclxuICAgIH0sXHJcbiAgICAndW5tdXRlJzoge1xyXG4gICAgICAgIGVuOiAnVW5tdXRlIHZvbHVtZScsXHJcbiAgICAgICAgemg6ICflj5bmtojpnZnpn7MnLFxyXG4gICAgICAgIGVzOiAnQWN0aXZlIGVsIHZvbHVtZW4nLFxyXG4gICAgICAgIGtvOiAn7IaM66as66W8IOuTo+uLpCcsXHJcbiAgICB9LFxyXG4gICAgJ21hcmtCdG4nOiB7IC8vIEFSSUEgU2NyZWVuIFJlYWRlciBhcmlhLWxhYmVsPVwiTWFyayBhcyBkb25lXCJcclxuICAgICAgICBlbjogJ01hcmsgYXMgRG9uZScsXHJcbiAgICAgICAgemg6ICfmoIforrDkuLrlt7LlrozmiJAnLFxyXG4gICAgICAgIGVzOiAnTWFycXVlIGNvbW8gaGVjaGEnLFxyXG4gICAgICAgIGtvOiAn7JmE66OM66GcIO2RnOyLnCcsXHJcbiAgICB9LFxyXG4gICAgJ3BpbkJ0bic6IHsgLy8gQVJJQSBTY3JlZW4gUmVhZGVyIFxyXG4gICAgICAgIGVuOiAnUGluIHRvIHRoZSBNYWluIERpc3BsYXknLFxyXG4gICAgICAgIHpoOiAn5re75Yqg5Yiw5Li76aG16Z2i5bGV56S6JyxcclxuICAgICAgICBlczogJ0FuY2xlIGEgbGEgcGFudGFsbGEgcHJpbmNpcGFsJyxcclxuICAgICAgICBrbzogJ+uplOyduCDrlJTsiqTtlIzroIjsnbTsl5Ag6rOg7KCVJyxcclxuICAgIH0sXHJcbiAgICAnZGVsQnRuJzogeyAvLyBBUklBIFNjcmVlbiBSZWFkZXJcclxuICAgICAgICBlbjogJ0RlbGV0ZSB0aGlzIFRhc2snLFxyXG4gICAgICAgIHpoOiAn5Yig6Zmk6K+l5Lu75YqhJyxcclxuICAgICAgICBlczogJ0JvcnJlIGVzdGEgdGFyZWEnLFxyXG4gICAgICAgIGtvOiAn7J20IOqzvOygnCDsgq3soJwnLFxyXG4gICAgfSxcclxuICAgICd0YXNrSGVscCc6IHtcclxuICAgICAgICBlbjogJ01hcmsgYSB0YXNrIGFzIGNvbXBsZXRlLiBQaW4gYSB0YXNrIHRvIHRoZSBtYWluIGRpc3BsYXkuJyxcclxuICAgICAgICB6aDogJ+agh+iusOS7u+WKoeS4uuW3suWujOaIkO+8jOaIlua3u+WKoOS7u+WKoeWIsOS4u+mhtemdouOAgicsXHJcbiAgICAgICAgZXM6ICdNYXJxdWUgdW5hIHRhcmVhIGNvbW8gY29tcGxldGFkYS4gQW5jbGUgdW5hIHRhcmVhIGEgbGEgcGFudGFsbGEgcHJpbmNpcGFsLicsXHJcbiAgICAgICAga286ICfqs7zsoJzrpbwg7JmE66OM66GcIO2RnOyLnC4g66mU7J24IOuUlOyKpO2UjOugiOydtOyXkCDqs7zsoJwg6rOg7KCVLicsXHJcbiAgICB9LFxyXG4gICAgJ2JhY2snOiB7XHJcbiAgICAgICAgZW46ICdCYWNrJyxcclxuICAgICAgICB6aDogJ+S4iuS4gOmhtScsXHJcbiAgICAgICAgZXM6ICdSZWdyZXNhJyxcclxuICAgICAgICBrbzogJ+uSpOuhnCcsXHJcbiAgICB9LFxyXG4gICAgJ25leHQnOiB7XHJcbiAgICAgICAgZW46ICdOZXh0JyxcclxuICAgICAgICB6aDogJ+S4i+S4gOmhtScsXHJcbiAgICAgICAgZXM6ICdQcsOzeGltYScsXHJcbiAgICAgICAga286ICfri6TsnYwnLFxyXG4gICAgfSxcclxuICAgICdza2lwJzoge1xyXG4gICAgICAgIGVuOiAnU2tpcCcsXHJcbiAgICAgICAgemg6ICfot7Pov4cnLFxyXG4gICAgICAgIGVzOiAnU2FsdGUnLFxyXG4gICAgICAgIGtvOiAn6rGw66W06riwJyxcclxuICAgIH0sXHJcbiAgICAndG9wJzoge1xyXG4gICAgICAgIGVuOiAnQmFjayB0byBUb3AnLCAvLyBBUklBIEJhY2sgdG8gdG9wIG9mIHRoZSBwYWdlXHJcbiAgICAgICAgemg6ICflm57liLDmnIDkuIrmlrknLFxyXG4gICAgICAgIGVzOiAnVnVlbHZhIGFycmliYScsXHJcbiAgICAgICAga286ICfsnITroZwnLFxyXG4gICAgfSxcclxuICAgICdjb25ncmF0c1RpdGxlJzoge1xyXG4gICAgICAgIGVuOiAnQ29uZ3JhdHVsYXRpb25zIScsXHJcbiAgICAgICAgemg6ICfmga3llpwnLFxyXG4gICAgICAgIGVzOiAnwqFGZWxpY2lkYWRlcyEnLFxyXG4gICAgICAgIGtvOiAn7LaV7ZWY7ZWp64uI64ukIScsXHJcbiAgICB9LFxyXG4gICAgJ2NvbmdyYXRzMSc6IHtcclxuICAgICAgICBlbjogJ0l0IHRvb2sgeW91ICcsXHJcbiAgICAgICAgemg6ICfkvaDoirHkuobmgLvlhbEgJyxcclxuICAgICAgICBlczogJ8KhU2UgdG9tw7MgJyxcclxuICAgICAgICBrbzogJ+2PrOuqqOuPhOuhnCAnLFxyXG4gICAgfSxcclxuICAgJ2NvbmdyYXRzMic6IHtcclxuICAgICAgICBlbjogJyBwb21vdGF0b2VzIHRvIGZpbmlzaCBhbGwgb2YgeW91ciB0YXNrcyEnLCBcclxuICAgICAgICB6aDogJyDkuKrlnJ/osYbmnaXlrozmiJDmiYDmnInku7vliqEnLFxyXG4gICAgICAgIGVzOiAnIHBvbW9kb3JvcyBwYXJhIHRlcm1pbmFyIHRvZGFzIHN1cyB0YXJlYXMhJyxcclxuICAgICAgICBrbzogJyDqsJwg66eM7JeQIOuqqOuToCDsnpHsl4XsnYQg7JmE66OM7ZaI7Iq164uI64ukIScsXHJcbiAgICB9LFxyXG4gICAgJ3BvdGF0b0RhbmNlJzoge1xyXG4gICAgICAgIGVuOiAnRGFuY2luZyBwb3RhdG8nLFxyXG4gICAgICAgIHpoOiAn5Zyf6LGG6Lez6IieJyxcclxuICAgICAgICBlczogJ1BhcGEgYmFpbGFuZG8nLFxyXG4gICAgICAgIGtvOiAn6rCQ7J6Q6rCAIOy2lOqzoCDsnojslrQnLFxyXG4gICAgfSxcclxuICAgICdwb21vdGF0byc6IHtcclxuICAgICAgICBlbjogJ1BvbW90YXRvJywgLy8gUG90YXRvXHJcbiAgICAgICAgemg6ICflkajmnJ/lnJ/osYYnLFxyXG4gICAgICAgIGVzOiAnUGFwYScsXHJcbiAgICAgICAga286ICfqsJDsnpAnLFxyXG4gICAgfSxcclxuICAgICdvcGVuSW5zdHInOiB7XHJcbiAgICAgICAgZW46ICdPcGVuIEluc3RydWN0aW9ucycsXHJcbiAgICAgICAgemg6ICfmiZPlvIDluK7liqnoj5zljZUnLFxyXG4gICAgICAgIGVzOiAnQWJyYSBsYXMgaW5zdHJ1Y2Npb25lcycsXHJcbiAgICAgICAga286ICfshKTrqoUg67O06riwJyxcclxuICAgIH0sXHJcbiAgICAnb3BlblNldHRpbmdzJzoge1xyXG4gICAgICAgIGVuOiAnT3BlbiBTZXR0aW5ncycsXHJcbiAgICAgICAgemg6ICfmiZPlvIDorr7nva4nLFxyXG4gICAgICAgIGVzOiAnQWJyYSBsYSBDb25maWd1cmFjacOzbicsXHJcbiAgICAgICAga286ICfshKTsoJUg7Je06riwJyxcclxuICAgIH0sXHJcbiAgICAnJzoge1xyXG4gICAgICAgIGVuOiAnJyxcclxuICAgICAgICB6aDogJycsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAnJyxcclxuICAgIH0sXHJcbn0gXHJcblxyXG4vLyBQb3RhdG8gVGltZXIgICAgICAgICAgICAg5Zyf6LGG6K6h5pe25ZmoXHJcbi8vIFdvcmsgICAgICAgICAgICAgICAgICAgICDkuJPms6hcclxuLy8gUmVzZXQgICAgICAgICAgICAgICAgICAgIOmHjee9rlxyXG4vLyBTdGFydCAgICAgICAgICAgICAgICAgICAg5byA5aeLXHJcbi8vIFN0b3AgICAgICAgICAgICAgICAgICAgICDmmoLlgZxcclxuLy8gVGFza3MgICAgICAgICAgICAgICAgICAgIOS7u+WKoVxyXG4vLyBBZGQgICAgICAgICAgICAgICAgICAgICAg5re75YqgXHJcbi8vIEVudGVyIFRhc2sgICAgICAgICAgICAgICDovpPlhaXku7vliqFcclxuLy8gRGVsZXRlIEFsbCAgICAgICAgICAgICAgIOWFqOmDqOWIoOmZpFxyXG4vLyBDb25maXJtIFJlc2V0IC0gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHRoZSB0aW1lcj9cclxuLy8g56Gu6K6k6YeN572uIC0g56Gu5a6a5oKo6KaB6YeN572u5pe26Ze05ZCX77yfXHJcbi8vIENvbmZpcm0gRGVsZXRlIEFsbCAtIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzP1xyXG4vLyDnoa7orqTlhajpg6jliKDpmaQgLSDnoa7lrprmgqjopoHliKDpmaTmiYDmnInnmoTku7vliqHlkJfvvJ9cclxuLy8gU2V0dGluZ3MgICAgICAgICAgICAgICAg6K6+572uXHJcbi8vIFNlbGVjdCBhIFRoZW1lICAgICAgICAgIOmAieaLqeS4u+mimFxyXG4vLyBMaWdodCAgICAgICAgICAgICAgICAgICDkuq7oibJcclxuLy8gRGFyayAgICAgICAgICAgICAgICAgICAg5pqX6ImyXHJcbi8vIFBvdGF0byAgICAgICAgICAgICAgICAgIOWcn+ixhlxyXG4vLyBXb3JrIFRpbWUgICAgICAgICAgICAgICDkuJPms6jml7bpl7RcclxuLy8gU2hvcnQgQnJlYWsgICAgICAgICAgICAg55+t5LyR5oGvXHJcbi8vIExvbmcgQnJlYWsgICAgICAgICAgICAgIOmVv+S8keaBr1xyXG4vLyBWb2x1bWUgICAgICAgICAgICAgICAgICDpn7Pph49cclxuLy8gQ2xvc2UgICAgICAgICAgICAgICAgICAg5YWz6ZetXHJcbiJdfQ==