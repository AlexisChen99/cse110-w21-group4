function cov_1psznzrkha() {
  var path = "C:\\Users\\Hane\\Desktop\\CSE110\\GitHubPages\\GitHubPages\\cse110-w21-group4\\source\\lang.js";
  var hash = "edb6d0fef94661bf1771f34c7a7e49589b564129";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Hane\\Desktop\\CSE110\\GitHubPages\\GitHubPages\\cse110-w21-group4\\source\\lang.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 11
        },
        end: {
          line: 481,
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
    hash: "edb6d0fef94661bf1771f34c7a7e49589b564129"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1psznzrkha = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1psznzrkha();
var dict = (cov_1psznzrkha().s[0]++, {
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
      ko: '놀고 있기'
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
    es: 'Patata',
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
      // CHANGED
      zh: '怎样使用',
      // OLD PLEASE CHANGE
      es: '',
      ko: '소개' // Check

    },
    'instrContent': {
      en: 'Potato Timer is a Pomodoro Timer meant to improve your productivity by having you focus ' + 'for a set "work" time and a following "break" time. After every four work phases, a longer break period occurs.\n' + '若想中文版，请点击右上角设置图标打开菜单。\n' + // These lines should be for users who don't know english (see other three areas)
      '[Spanish]\n' + '[Korean]\n',
      // 한국어에 설정 :)
      zh: '土豆计时器是一个帮助提高效率的番茄钟定时器，其通过使你专注在特定的工作时间' + '并伴随之后的休息时间。在每四个工作阶段后，将会出现一个长休息时段。\n' + 'To switch to English, click the gear icon to open the settings menu.\n' + // Translated to something like this 
      '[Spanish]\n' + '[Korean]\n',
      es: '' + 'To switch to English, click the gear icon to open the settings menu.\n' + '若想中文版，请点击右上角设置图标打开菜单\n' + '[Korean]\n',
      ko: '' + 'To switch to English, click the gear icon to open the settings menu.\n' + '若想中文版，请点击右上角设置图标打开菜单\n' + '[Spanish]\n'
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
      en: 'To open the settings, click the gear icon in the top right corner.\n' + 'There you can change to minimalist light and dark themes or our fun potato theme. ' + 'In the potato theme, you can disable dancing potatoes if they are too distracting!\n' + 'You can adjust how long you want the timer to run for each phase.\n' + 'You can adjust the volume or click on the icon to mute it.\n' + 'You can change your language to Español, 中文, 한국어.\n' + '',
      zh: '点击右上角工具图标打开设置菜单。\n' + '随后你将能切换到亮色或暗色模式，以及我们的趣味土豆模式。\n' + '在土豆模式中，如果你觉得被打扰，你可以取消跳舞的土豆动图。\n' + '你可以调整每个周期的长度。\n' + '你可以调整音量或点击图标静音。\n' + '你可以改变语言模式至English, Español，한국어。\n',
      es: '',
      ko: ''
    }
  },
  '3': {
    'instrTopic': {
      en: 'Tasks',
      zh: '任务',
      es: '',
      ko: '과제'
    },
    'instrContent': {
      en: 'You can enter your own tasks in the white field below the start button. ' + 'To add a task, you may click the add button or press enter. ' + 'One task is automatically pinned to the main page. ' + 'If you want to see all of your tasks, click on the "Tasks" button! ' + 'You can mark tasks as complete by clicking on the circle, ' + 'pin or unpin tasks on the main page, and delete tasks. ' + 'If you mark all tasks as done, the timer ends! Well done!\n' + '*Unfinished tasks are locally stored in your cookies so you can get back to working ' + 'if you return to our website!',
      zh: '您可以在开始按钮下白色区域输入任意任务。' + '您可以点击添加图标或按下回车键来添加任务。' + '第一个任务自动添加至主页面。' + '若您想看到全部任务，点击‘任务’按钮。' + '您可以点击圆圈，标记任务为已完成，' + '也可以置顶或取消置顶任务到主页面，以及删除任务。' + '若您标记所有任务为已完成，计时器将自动停止！\n' + '*未完成的任务将自动存储在缓存记录中，以便于您在回到我们的网页时重回工作模式。',
      es: '',
      ko: ''
    }
  },
  '4': {
    'instrTopic': {
      en: 'About',
      zh: '关于',
      es: '',
      ko: '개발자 소개' // Developer Intro

    },
    'instrContent': {
      en: 'Potato Timer is happily developed by: \n',
      zh: '土豆计时器由以下成员开发：\n',
      es: '',
      ko: ''
    }
  },
  'enableAnimation': {
    en: 'Enable Potato Animation',
    zh: '启动土豆特效',
    es: '',
    ko: ''
  },
  'disableAnimation': {
    en: 'Disable Potato Animation',
    zh: '取消土豆特效',
    es: '',
    ko: ''
  },
  'notification': {
    'welcome': {
      en: 'Welcome Back!',
      zh: '欢迎回来',
      es: '',
      ko: ''
    },
    'mark': {
      en: 'You marked a task as done!',
      zh: '已标记该任务为完成!',
      es: '',
      ko: ''
    },
    'unmark': {
      en: 'You marked a task as incomplete!',
      zh: '已标记该任务为未完成!',
      es: '',
      ko: ''
    },
    'addTask': {
      en: 'A task has been added!',
      zh: '该任务已添加!',
      es: '',
      ko: '과제를 추가했어!' // Informal :)
      // Uh 하다 / 되다?

    },
    'pinTask': {
      en: 'A task has been pinned!',
      zh: '该任务已放置到主页面!',
      es: '',
      ko: '핀을 추가됐어!' // Pin was added

    },
    'unpinTask': {
      en: 'A task has been unpinned!',
      zh: '该任务已被取消置顶!',
      es: '',
      ko: '핀을 뺐어!' // Pin was removed

    },
    'delTask': {
      en: 'A task has been deleted!',
      zh: '该任务已被删除！',
      es: '',
      ko: '과제를 삭제됐어!' // 되????????

    },
    'deleteAll': {
      en: 'All tasks have been deleted!',
      zh: '所有任务已被删除!',
      es: '',
      ko: '과제를 모두 삭제됐어!'
    }
  },
  'help': {
    // aria-label="Show Instructions"
    en: 'Show Instructions',
    zh: '显示帮助菜单',
    es: '',
    ko: '설명은 보여'
  },
  'instructions': {
    en: 'Instructions',
    zh: '帮助菜单',
    es: '',
    ko: '설명'
  },
  'settingsIcon': {
    // alt="Show Settings"
    en: 'Show Settings',
    zh: '显示设置菜单',
    es: '',
    ko: '설정은 보여' // Subject particle used because these are topics?

  },
  'mute': {
    // Mute volume
    en: 'Mute volume',
    // alt="Mute volume"
    zh: '静音',
    es: '',
    ko: '소리를 숨기다' // Check

  },
  'unmute': {
    en: 'Unmute volume',
    zh: '取消静音',
    es: '',
    ko: '소리를 듣다' // ??????

  },
  'noscript': {
    'sadPotato': {
      // alt="Sad Potato is Sad"
      en: 'Sad Potato is Sad',
      zh: '土豆很伤心',
      es: '',
      ko: '슬픈 감자'
    },
    'jsDisabled': {
      en: 'Oh no!\n' + 'We\'re sorry, but this website application uses JavaScript to operate the timer.\n' + 'Please enable JavaScript for the best user experience!',
      zh: '哦不！\n' + '抱歉，改网站使用JavaScript来运行计时器。\n' + '请启动JavaScript以享受最佳使用感受！',
      es: '',
      ko: '어머! '
    }
  },
  'markBtn': {
    // ARIA Screen Reader aria-label="Mark as done"
    en: 'Mark as Done',
    zh: '标记为已完成',
    es: '',
    ko: ''
  },
  'pinBtn': {
    // ARIA Screen Reader 
    en: 'Pin to the Main Display',
    zh: '添加到主页面展示',
    es: '',
    ko: ''
  },
  'delBtn': {
    // ARIA Screen Reader
    en: 'Delete this Task',
    zh: '删除该任务',
    es: '',
    ko: ''
  },
  'taskHelp': {
    en: 'Mark a task as complete. Pin a task to the main display.',
    zh: '标记任务为已完成，或添加任务到主页面。',
    es: '',
    ko: ''
  },
  'back': {
    en: 'Back',
    zh: '上一页',
    es: '',
    ko: '뒤로'
  },
  'next': {
    en: 'Next',
    zh: '下一页',
    es: '',
    ko: '다음'
  },
  'skip': {
    en: 'Skip',
    zh: '跳过',
    es: '',
    ko: ''
  },
  'top': {
    en: 'Back to Top',
    // ARIA Back to top of the page
    zh: '回到最上方',
    es: '',
    ko: ''
  },
  'congratsTitle': {
    en: 'Congratulations!',
    zh: '恭喜',
    es: '',
    ko: ''
  },
  'congrats1': {
    en: 'It took you ',
    zh: '你花了总共 ',
    es: '',
    ko: ''
  },
  // It took you 5 pomos to finish all of your tasks!
  // Note that congrats1 is the first half of the variable and congrats2 is the second half
  // The ordering of language can be different, so it's up to you where the number goes
  'congrats2': {
    en: ' pomotatoes to finish all of your tasks!',
    //pomotatoes in English, pomodoros in other languages?
    zh: ' 个土豆来完成所有任务',
    es: '',
    ko: ''
  },
  'potatoDance': {
    en: 'Dancing potato',
    zh: '土豆跳舞',
    es: '',
    ko: '감자가 추고 있어'
  },
  'pomotato': {
    en: 'Pomotato',
    // Potato
    zh: '周期土豆',
    es: '',
    ko: '감자'
  },
  'openInstr': {
    en: 'Open Instructions',
    zh: '打开帮助菜单',
    es: '',
    ko: ''
  },
  'openSettings': {
    en: 'Open Settings',
    zh: '打开设置',
    es: '',
    ko: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmcuanMiXSwibmFtZXMiOlsiZGljdCIsImVuIiwiemgiLCJlcyIsImtvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLElBQUlBLElBQUksNkJBQUc7QUFDUCxXQUFTO0FBQ0xDLElBQUFBLEVBQUUsRUFBRSxjQURDO0FBRUxDLElBQUFBLEVBQUUsRUFBRSxPQUZDO0FBR0xDLElBQUFBLEVBQUUsRUFBRSx3QkFIQztBQUlMQyxJQUFBQSxFQUFFLEVBQUU7QUFKQyxHQURGO0FBT1AsV0FBUztBQUNMLFlBQVE7QUFDSkgsTUFBQUEsRUFBRSxFQUFFLE1BREE7QUFFSkMsTUFBQUEsRUFBRSxFQUFFLElBRkE7QUFHSkMsTUFBQUEsRUFBRSxFQUFFLFNBSEE7QUFJSkMsTUFBQUEsRUFBRSxFQUFFO0FBSkEsS0FESDtBQU9MLG1CQUFlO0FBQ1hILE1BQUFBLEVBQUUsRUFBRSxhQURPO0FBRVhDLE1BQUFBLEVBQUUsRUFBRSxLQUZPO0FBR1hDLE1BQUFBLEVBQUUsRUFBRSxnQkFITztBQUlYQyxNQUFBQSxFQUFFLEVBQUU7QUFKTyxLQVBWO0FBYUwsa0JBQWM7QUFDVkgsTUFBQUEsRUFBRSxFQUFFLFlBRE07QUFFVkMsTUFBQUEsRUFBRSxFQUFFLEtBRk07QUFHVkMsTUFBQUEsRUFBRSxFQUFFLGdCQUhNO0FBSVZDLE1BQUFBLEVBQUUsRUFBRTtBQUpNLEtBYlQ7QUFtQkwsZUFBVztBQUNQSCxNQUFBQSxFQUFFLEVBQUUsU0FERztBQUVQQyxNQUFBQSxFQUFFLEVBQUUsS0FGRztBQUdQQyxNQUFBQSxFQUFFLEVBQUUsUUFIRztBQUlQQyxNQUFBQSxFQUFFLEVBQUU7QUFKRyxLQW5CTjtBQXlCTCxZQUFRO0FBQ0pILE1BQUFBLEVBQUUsRUFBRSxNQURBO0FBRUpDLE1BQUFBLEVBQUUsRUFBRSxJQUZBO0FBR0pDLE1BQUFBLEVBQUUsRUFBRSxVQUhBO0FBSUpDLE1BQUFBLEVBQUUsRUFB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UCxjQUFZO0FBQ1JILElBQUFBLEVBQUUsRUFBRSxVQURJO0FBQ1E7QUFDaEJDLElBQUFBLEVBQUUsRUFBRSxNQUZJO0FBR1JDLElBQUFBLEVBQUUsRUFBRSxFQUhJO0FBSVJDLElBQUFBLEVBQUUsRUFBRTtBQUpJLEdBeGNMO0FBOGNQLGVBQWE7QUFDVEgsSUFBQUEsRUFBRSxFQUFFLG1CQURLO0FBRVRDLElBQUFBLEVBQUUsRUFBRSxRQUZLO0FBR1RDLElBQUFBLEVBQUUsRUFBRSxFQUhLO0FBSVRDLElBQUFBLEVBQUUsRUFBRTtBQUpLLEdBOWNOO0FBb2RQLGtCQUFnQjtBQUNaSCxJQUFBQSxFQUFFLEVBQUUsZUFEUTtBQUVaQyxJQUFBQSxFQUFFLEVBQUUsTUFGUTtBQUdaQyxJQUFBQSxFQUFFLEVBQUUsRUFIUTtBQUlaQyxJQUFBQSxFQUFFLEVBQUU7QUFKUSxHQXBkVDtBQTBkUCxNQUFJO0FBQ0FILElBQUFBLEVBQUUsRUFBRSxFQURKO0FBRUFDLElBQUFBLEVBQUUsRUFBRSxFQUZKO0FBR0FDLElBQUFBLEVBQUUsRUFBRSxFQUhKO0FBSUFDLElBQUFBLEVBQUUsRUFBRTtBQUpKO0FBMWRHLENBQUgsQ0FBUixDLENBa2VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGljdCA9IHtcclxuICAgICd0aXRsZSc6IHtcclxuICAgICAgICBlbjogJ1BvdGF0byBUaW1lcicsXHJcbiAgICAgICAgemg6ICflnJ/osYborqHml7blmagnLFxyXG4gICAgICAgIGVzOiAnVGVtcG9yaXphZG9yIGRlIFBhdGF0YScsXHJcbiAgICAgICAga286ICftj6zthYzsnbTthqAg7YOA7J2066i4J1xyXG4gICAgfSxcclxuICAgICdwaGFzZSc6IHtcclxuICAgICAgICAnd29yayc6IHtcclxuICAgICAgICAgICAgZW46ICd3b3JrJyxcclxuICAgICAgICAgICAgemg6ICfkuJPms6gnLFxyXG4gICAgICAgICAgICBlczogJ1RyYWJham8nLFxyXG4gICAgICAgICAgICBrbzogJ+ydvO2VmOq4sCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnc2hvcnQgYnJlYWsnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnc2hvcnQgYnJlYWsnLFxyXG4gICAgICAgICAgICB6aDogJ+efreS8keaBrycsXHJcbiAgICAgICAgICAgIGVzOiAnZGVzY2Fuc28gYnJldmUnLFxyXG4gICAgICAgICAgICBrbzogJ+ynp+ydgCDtnLTsi53quLDqsIQnLFxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgICdsb25nIGJyZWFrJzoge1xyXG4gICAgICAgICAgICBlbjogJ2xvbmcgYnJlYWsnLFxyXG4gICAgICAgICAgICB6aDogJ+mVv+S8keaBrycsXHJcbiAgICAgICAgICAgIGVzOiAnZGVzY2Fuc28gbGFyZ28nLFxyXG4gICAgICAgICAgICBrbzogJ+q4tCDtnLTsi53quLDqsIQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3N0b3BwZWQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnc3RvcHBlZCcsXHJcbiAgICAgICAgICAgIHpoOiAn5bey5YGc5q2iJyxcclxuICAgICAgICAgICAgZXM6ICdwYXJhZG8nLFxyXG4gICAgICAgICAgICBrbzogJ+ykkeyngO2VmOq4sCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnaWRsZSc6IHtcclxuICAgICAgICAgICAgZW46ICdpZGxlJyxcclxuICAgICAgICAgICAgemg6ICfnqbrpl7InLFxyXG4gICAgICAgICAgICBlczogJ2luYWN0aXZvJyxcclxuICAgICAgICAgICAga286ICfrhoDqs6Ag7J6I6riwJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICdyZXNldCc6IHtcclxuICAgICAgICBlbjogJ1Jlc2V0JyxcclxuICAgICAgICB6aDogJ+mHjee9ricsXHJcbiAgICAgICAgZXM6ICdSZWluaWNpYXInLFxyXG4gICAgICAgIGtvOiAn7J6s7ISk7KCVJyxcclxuICAgIH0sXHJcbiAgICAnc3RhcnQnOiB7XHJcbiAgICAgICAgZW46ICdTdGFydCcsXHJcbiAgICAgICAgemg6ICflvIDlp4snLFxyXG4gICAgICAgIGVzOiAnRW1waWV6bycsXHJcbiAgICAgICAga286ICfsi5zsnpEnLFxyXG4gICAgfSxcclxuICAgICdzdG9wJzoge1xyXG4gICAgICAgIGVuOiAnU3RvcCcsXHJcbiAgICAgICAgemg6ICfmmoLlgZwnLFxyXG4gICAgICAgIGVzOiAnUGFyYXInLFxyXG4gICAgICAgIGtvOiAn66mI7LakJyxcclxuICAgIH0sXHJcbiAgICAndGFza3MnOiB7XHJcbiAgICAgICAgZW46ICdUYXNrcycsXHJcbiAgICAgICAgemg6ICfku7vliqEnLFxyXG4gICAgICAgIGVzOiAnVGFyZWFzJyxcclxuICAgICAgICBrbzogJ+qzvOygnOuTpCcsXHJcbiAgICB9LFxyXG4gICAgJ2FkZCc6IHtcclxuICAgICAgICBlbjogJ0FkZCcsXHJcbiAgICAgICAgemg6ICfmt7vliqAnLFxyXG4gICAgICAgIGVzOiAnQWdyZWdhcicsXHJcbiAgICAgICAga286ICfstpTqsIAnLFxyXG4gICAgfSxcclxuICAgICdlbnRlclRhc2snOiB7XHJcbiAgICAgICAgZW46ICdFbnRlciBhIFRhc2sgVG8gU3RhcnQnLFxyXG4gICAgICAgIHpoOiAn6K+36L6T5YWl5Lu75Yqh5p2l5byA5aeL5L2/55SoJyxcclxuICAgICAgICBlczogJ0luZ3Jlc2EgdW5hIHRhcmVhIHBhcmEgZW1wZXphcicsXHJcbiAgICAgICAga286ICfsi5zsnpHtlZjquLAg7KCE7JeQIOqzvOygnOqwgCDstpTqsIDtlZjsi63si5zsmKQnLFxyXG4gICAgfSxcclxuICAgICdkZWxldGVBbGwnOiB7XHJcbiAgICAgICAgZW46ICdEZWxldGUgQWxsJyxcclxuICAgICAgICB6aDogJ+WFqOmDqOWIoOmZpCcsXHJcbiAgICAgICAgZXM6ICdCb3JyYXIgVG9kbycsXHJcbiAgICAgICAga286ICfrqqjrkZAg7IKt7KCc7ZWY6riwJyxcclxuICAgIH0sXHJcbiAgICAnY2xvc2UnOiB7XHJcbiAgICAgICAgZW46ICdDbG9zZScsXHJcbiAgICAgICAgemg6ICflhbPpl60nLFxyXG4gICAgICAgIGVzOiAnQ2VycmFyJyxcclxuICAgICAgICBrbzogJ+uLq+q4sCcsXHJcbiAgICB9LFxyXG4gICAgJ3NldHRpbmdzJzoge1xyXG4gICAgICAgIGVuOiAnU2V0dGluZ3MnLFxyXG4gICAgICAgIHpoOiAn6K6+572uJyxcclxuICAgICAgICBlczogJ0NvbmZpZ3VyYWNpw7NuJyxcclxuICAgICAgICBrbzogJ+yEpOyglScsXHJcbiAgICB9LFxyXG4gICAgJ3NlbGVjdFRoZW1lJzoge1xyXG4gICAgICAgIGVuOiAnU2VsZWN0IGEgVGhlbWUnLFxyXG4gICAgICAgIHpoOiAn6YCJ5oup5Li76aKYJyxcclxuICAgICAgICBlczogJ1NlbGVjY2lvbmFyIHVuYSBUZW1hJyxcclxuICAgICAgICBrbzogJ+2FjOuniCDqs6DrpbTquLAnLFxyXG4gICAgfSxcclxuICAgICdsaWdodFRoZW1lJzoge1xyXG4gICAgICAgIGVuOiAnTGlnaHQnLFxyXG4gICAgICAgIHpoOiAn5Lqu6ImyJyxcclxuICAgICAgICBlczogJ0x1eicsXHJcbiAgICAgICAga286ICfrsJ3snYAnLFxyXG4gICAgfSxcclxuICAgICdkYXJrVGhlbWUnOiB7XHJcbiAgICAgICAgZW46ICdEYXJrJyxcclxuICAgICAgICB6aDogJ+aal+iJsicsXHJcbiAgICAgICAgZXM6ICdPc2N1cm8nLFxyXG4gICAgICAgIGtvOiAn7Ja065GQ7Jq0JyxcclxuICAgIH0sXHJcbiAgICAncG90YXRvVGhlbWUnOiB7XHJcbiAgICAgICAgZW46ICdQb3RhdG8nLFxyXG4gICAgICAgIHpoOiAn5Zyf6LGGJyxcclxuICAgICAgICBlczogJ1BhdGF0YScsXHJcbiAgICAgICAga286ICfqsJDsnpAnLFxyXG4gICAgfSxcclxuICAgICd3b3JrVGltZSc6IHtcclxuICAgICAgICBlbjogJ1dvcmsgVGltZScsXHJcbiAgICAgICAgemg6ICfkuJPms6jml7bpl7QnLFxyXG4gICAgICAgIGVzOiAnVGllbXBvIGRlIFRyYWJham8nLFxyXG4gICAgICAgIGtvOiAn7J287ZWY64qUIOyLnOqwhCcsXHJcbiAgICB9LFxyXG4gICAgJ3Nob3J0QnJlYWsnOiB7XHJcbiAgICAgICAgZW46ICdTaG9ydCBCcmVhaycsXHJcbiAgICAgICAgemg6ICfnn63kvJHmga8nLFxyXG4gICAgICAgIGVzOiAnRGVzY2Fuc28gQnJldmUnLFxyXG4gICAgICAgIGtvOiAn7Ken7J2AIO2ctOyLnScsXHJcbiAgICB9LFxyXG4gICAgJ2xvbmdCcmVhayc6IHtcclxuICAgICAgICBlbjogJ0xvbmcgQnJlYWsnLFxyXG4gICAgICAgIHpoOiAn6ZW/5LyR5oGvJyxcclxuICAgICAgICBlczogJ0Rlc2NhbnNvIExhcmdvJyxcclxuICAgICAgICBrbzogJ+q4tCDtnLTsi50nLFxyXG4gICAgfSxcclxuICAgIC8vICdjeWNsZUxlbmd0aCc6IHtcclxuICAgIC8vICAgICBlbjogJ0xlbmd0aMKgb2bCoGHCoEN5Y2xlJyxcclxuICAgIC8vICAgICB6aDogJ+WNleS4quWRqOacn+mVv+W6picsXHJcbiAgICAvLyAgICAgZXM6ICcnLFxyXG4gICAgLy8gICAgIGtvOiAn7ZWcIOyCrOydtO2BtOydmCDquLjsnbQnLFxyXG4gICAgLy8gfSxcclxuICAgICd2b2x1bWUnOiB7XHJcbiAgICAgICAgZW46ICdWb2x1bWUnLFxyXG4gICAgICAgIHpoOiAn6Z+z6YePJyxcclxuICAgICAgICBlczogJ1ZvbHVtZW4nLFxyXG4gICAgICAgIGtvOiAn7IaM66asJyxcclxuICAgIH0sXHJcbiAgICAnY29uZmlybVJlc2V0Jzoge1xyXG4gICAgICAgIGVuOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHRoZSB0aW1lclxcJ3MgY3ljbGU/JyxcclxuICAgICAgICB6aDogJ+ehruWumuaCqOimgemHjee9ruaXtumXtOWQl++8nycsXHJcbiAgICAgICAgZXM6ICfCv0VzdMOhIHNlZ3VybyBkZSBxdWUgZGVzZWEgcmVpbmljaWFyIGVsIGNpY2xvIGRlbCB0ZW1wb3JpemFkb3I/JyxcclxuICAgICAgICBrbzogJ+yerOyEpOygleydhCDsm5DtlZjsi63ri4jquYw/JyxcclxuICAgIH0sXHJcbiAgICAnY29uZmlybURlbGV0ZUFsbCc6IHtcclxuICAgICAgICBlbjogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHRhc2tzPycsXHJcbiAgICAgICAgemg6ICfnoa7lrprmgqjopoHliKDpmaTmiYDmnInnmoTku7vliqHlkJfvvJ8nLFxyXG4gICAgICAgIGVzOiAnwr9Fc3TDoSBzZWd1cm8gZGUgcXVlIHF1aWVyZSBib3JyYXIgdG9kYXMgbGFzIHRhcmVhcz8nLFxyXG4gICAgICAgIGtvOiAn7IKt7KCc66W8IOybkO2VmOyLreuLiOq5jD8nLFxyXG4gICAgfSxcclxuICAgICdjb25maXJtJzoge1xyXG4gICAgICAgIGVuOiAnQ29uZmlybScsXHJcbiAgICAgICAgemg6ICfnoa7orqQnLFxyXG4gICAgICAgIGVzOiAnQ29uZmlybWFyJyxcclxuICAgICAgICBrbzogJ+2ZleyduO2VmOq4sCcsXHJcbiAgICB9LFxyXG4gICAgJ2NhbmNlbCc6IHtcclxuICAgICAgICBlbjogJ0NhbmNlbCcsXHJcbiAgICAgICAgemg6ICflj5bmtognLFxyXG4gICAgICAgIGVzOiAnQ2FuY2VsYXInLFxyXG4gICAgICAgIGtvOiAn7Leo7IaM7ZWY6riwJyxcclxuICAgIH0sXHJcbiAgICAnMSc6IHtcclxuICAgICAgICAnaW5zdHJUb3BpYyc6IHtcclxuICAgICAgICAgICAgZW46ICdJbnRyb2R1Y3Rpb24nLCAvLyBDSEFOR0VEXHJcbiAgICAgICAgICAgIHpoOiAn5oCO5qC35L2/55SoJywgICAgICAvLyBPTEQgUExFQVNFIENIQU5HRVxyXG4gICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgIGtvOiAn7IaM6rCcJywgLy8gQ2hlY2tcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnUG90YXRvIFRpbWVyIGlzIGEgUG9tb2Rvcm8gVGltZXIgbWVhbnQgdG8gaW1wcm92ZSB5b3VyIHByb2R1Y3Rpdml0eSBieSBoYXZpbmcgeW91IGZvY3VzICcgK1xyXG4gICAgICAgICAgICAgICAgJ2ZvciBhIHNldCBcIndvcmtcIiB0aW1lIGFuZCBhIGZvbGxvd2luZyBcImJyZWFrXCIgdGltZS4gQWZ0ZXIgZXZlcnkgZm91ciB3b3JrIHBoYXNlcywgYSBsb25nZXIgYnJlYWsgcGVyaW9kIG9jY3Vycy5cXG4nICtcclxuICAgICAgICAgICAgICAgICfoi6Xmg7PkuK3mlofniYjvvIzor7fngrnlh7vlj7PkuIrop5Lorr7nva7lm77moIfmiZPlvIDoj5zljZXjgIJcXG4nICsgLy8gVGhlc2UgbGluZXMgc2hvdWxkIGJlIGZvciB1c2VycyB3aG8gZG9uJ3Qga25vdyBlbmdsaXNoIChzZWUgb3RoZXIgdGhyZWUgYXJlYXMpXHJcbiAgICAgICAgICAgICAgICAnW1NwYW5pc2hdXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnW0tvcmVhbl1cXG4nLCAvLyDtlZzqta3slrTsl5Ag7ISk7KCVIDopXHJcbiAgICAgICAgICAgIHpoOiAn5Zyf6LGG6K6h5pe25Zmo5piv5LiA5Liq5biu5Yqp5o+Q6auY5pWI546H55qE55Wq6IyE6ZKf5a6a5pe25Zmo77yM5YW26YCa6L+H5L2/5L2g5LiT5rOo5Zyo54m55a6a55qE5bel5L2c5pe26Ze0JyArXHJcbiAgICAgICAgICAgICAgICAn5bm25Ly06ZqP5LmL5ZCO55qE5LyR5oGv5pe26Ze044CC5Zyo5q+P5Zub5Liq5bel5L2c6Zi25q615ZCO77yM5bCG5Lya5Ye6546w5LiA5Liq6ZW/5LyR5oGv5pe25q6144CCXFxuJytcclxuICAgICAgICAgICAgICAgICdUbyBzd2l0Y2ggdG8gRW5nbGlzaCwgY2xpY2sgdGhlIGdlYXIgaWNvbiB0byBvcGVuIHRoZSBzZXR0aW5ncyBtZW51LlxcbicgKyAvLyBUcmFuc2xhdGVkIHRvIHNvbWV0aGluZyBsaWtlIHRoaXMgXHJcbiAgICAgICAgICAgICAgICAnW1NwYW5pc2hdXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnW0tvcmVhbl1cXG4nLFxyXG4gICAgICAgICAgICBlczogJycgK1xyXG4gICAgICAgICAgICAgICAgJ1RvIHN3aXRjaCB0byBFbmdsaXNoLCBjbGljayB0aGUgZ2VhciBpY29uIHRvIG9wZW4gdGhlIHNldHRpbmdzIG1lbnUuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAn6Iul5oOz5Lit5paH54mI77yM6K+354K55Ye75Y+z5LiK6KeS6K6+572u5Zu+5qCH5omT5byA6I+c5Y2VXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnW0tvcmVhbl1cXG4nLFxyXG4gICAgICAgICAgICBrbzogJycgK1xyXG4gICAgICAgICAgICAgICAgJ1RvIHN3aXRjaCB0byBFbmdsaXNoLCBjbGljayB0aGUgZ2VhciBpY29uIHRvIG9wZW4gdGhlIHNldHRpbmdzIG1lbnUuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAn6Iul5oOz5Lit5paH54mI77yM6K+354K55Ye75Y+z5LiK6KeS6K6+572u5Zu+5qCH5omT5byA6I+c5Y2VXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnW1NwYW5pc2hdXFxuJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgICcyJzoge1xyXG4gICAgICAgICdpbnN0clRvcGljJzoge1xyXG4gICAgICAgICAgICBlbjogJ1NldHRpbmdzJyxcclxuICAgICAgICAgICAgemg6ICforr7nva4nLFxyXG4gICAgICAgICAgICBlczogJ0NvbmZpZ3VyYWNpw7NuJyxcclxuICAgICAgICAgICAga286ICfshKTsoJUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2luc3RyQ29udGVudCc6IHtcclxuICAgICAgICAgICAgZW46ICdUbyBvcGVuIHRoZSBzZXR0aW5ncywgY2xpY2sgdGhlIGdlYXIgaWNvbiBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lci5cXG4nICsgXHJcbiAgICAgICAgICAgICAgICAnVGhlcmUgeW91IGNhbiBjaGFuZ2UgdG8gbWluaW1hbGlzdCBsaWdodCBhbmQgZGFyayB0aGVtZXMgb3Igb3VyIGZ1biBwb3RhdG8gdGhlbWUuICcgK1xyXG4gICAgICAgICAgICAgICAgJ0luIHRoZSBwb3RhdG8gdGhlbWUsIHlvdSBjYW4gZGlzYWJsZSBkYW5jaW5nIHBvdGF0b2VzIGlmIHRoZXkgYXJlIHRvbyBkaXN0cmFjdGluZyFcXG4nICtcclxuICAgICAgICAgICAgICAgICdZb3UgY2FuIGFkanVzdCBob3cgbG9uZyB5b3Ugd2FudCB0aGUgdGltZXIgdG8gcnVuIGZvciBlYWNoIHBoYXNlLlxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ1lvdSBjYW4gYWRqdXN0IHRoZSB2b2x1bWUgb3IgY2xpY2sgb24gdGhlIGljb24gdG8gbXV0ZSBpdC5cXG4nICtcclxuICAgICAgICAgICAgICAgICdZb3UgY2FuIGNoYW5nZSB5b3VyIGxhbmd1YWdlIHRvIEVzcGHDsW9sLCDkuK3mlocsIO2VnOq1reyWtC5cXG4nICtcclxuICAgICAgICAgICAgICAgICcnLFxyXG4gICAgICAgICAgICB6aDogJ+eCueWHu+WPs+S4iuinkuW3peWFt+Wbvuagh+aJk+W8gOiuvue9ruiPnOWNleOAglxcbicrXHJcbiAgICAgICAgICAgICAgICAn6ZqP5ZCO5L2g5bCG6IO95YiH5o2i5Yiw5Lqu6Imy5oiW5pqX6Imy5qih5byP77yM5Lul5Y+K5oiR5Lus55qE6Laj5ZGz5Zyf6LGG5qih5byP44CCXFxuJytcclxuICAgICAgICAgICAgICAgICflnKjlnJ/osYbmqKHlvI/kuK3vvIzlpoLmnpzkvaDop4nlvpfooqvmiZPmibDvvIzkvaDlj6/ku6Xlj5bmtojot7PoiJ7nmoTlnJ/osYbliqjlm77jgIJcXG4nK1xyXG4gICAgICAgICAgICAgICAgJ+S9oOWPr+S7peiwg+aVtOavj+S4quWRqOacn+eahOmVv+W6puOAglxcbicrXHJcbiAgICAgICAgICAgICAgICAn5L2g5Y+v5Lul6LCD5pW06Z+z6YeP5oiW54K55Ye75Zu+5qCH6Z2Z6Z+z44CCXFxuJytcclxuICAgICAgICAgICAgICAgICfkvaDlj6/ku6XmlLnlj5jor63oqIDmqKHlvI/oh7NFbmdsaXNoLCBFc3Bhw7FvbO+8jO2VnOq1reyWtOOAglxcbicsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgfSxcclxuICAgICczJzoge1xyXG4gICAgICAgICdpbnN0clRvcGljJzoge1xyXG4gICAgICAgICAgICBlbjogJ1Rhc2tzJyxcclxuICAgICAgICAgICAgemg6ICfku7vliqEnLFxyXG4gICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCcJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnWW91IGNhbiBlbnRlciB5b3VyIG93biB0YXNrcyBpbiB0aGUgd2hpdGUgZmllbGQgYmVsb3cgdGhlIHN0YXJ0IGJ1dHRvbi4gJyArXHJcbiAgICAgICAgICAgICAgICAnVG8gYWRkIGEgdGFzaywgeW91IG1heSBjbGljayB0aGUgYWRkIGJ1dHRvbiBvciBwcmVzcyBlbnRlci4gJyArXHJcbiAgICAgICAgICAgICAgICAnT25lIHRhc2sgaXMgYXV0b21hdGljYWxseSBwaW5uZWQgdG8gdGhlIG1haW4gcGFnZS4gJyArXHJcbiAgICAgICAgICAgICAgICAnSWYgeW91IHdhbnQgdG8gc2VlIGFsbCBvZiB5b3VyIHRhc2tzLCBjbGljayBvbiB0aGUgXCJUYXNrc1wiIGJ1dHRvbiEgJyArXHJcbiAgICAgICAgICAgICAgICAnWW91IGNhbiBtYXJrIHRhc2tzIGFzIGNvbXBsZXRlIGJ5IGNsaWNraW5nIG9uIHRoZSBjaXJjbGUsICcgK1xyXG4gICAgICAgICAgICAgICAgJ3BpbiBvciB1bnBpbiB0YXNrcyBvbiB0aGUgbWFpbiBwYWdlLCBhbmQgZGVsZXRlIHRhc2tzLiAnICtcclxuICAgICAgICAgICAgICAgICdJZiB5b3UgbWFyayBhbGwgdGFza3MgYXMgZG9uZSwgdGhlIHRpbWVyIGVuZHMhIFdlbGwgZG9uZSFcXG4nICsgXHJcbiAgICAgICAgICAgICAgICAnKlVuZmluaXNoZWQgdGFza3MgYXJlIGxvY2FsbHkgc3RvcmVkIGluIHlvdXIgY29va2llcyBzbyB5b3UgY2FuIGdldCBiYWNrIHRvIHdvcmtpbmcgJyArXHJcbiAgICAgICAgICAgICAgICAnaWYgeW91IHJldHVybiB0byBvdXIgd2Vic2l0ZSEnLFxyXG4gICAgICAgICAgICB6aDogJ+aCqOWPr+S7peWcqOW8gOWni+aMiemSruS4i+eZveiJsuWMuuWfn+i+k+WFpeS7u+aEj+S7u+WKoeOAgicgK1xyXG4gICAgICAgICAgICAgICAgJ+aCqOWPr+S7peeCueWHu+a3u+WKoOWbvuagh+aIluaMieS4i+Wbnui9pumUruadpea3u+WKoOS7u+WKoeOAgicrXHJcbiAgICAgICAgICAgICAgICAn56ys5LiA5Liq5Lu75Yqh6Ieq5Yqo5re75Yqg6Iez5Li76aG16Z2i44CCJytcclxuICAgICAgICAgICAgICAgICfoi6Xmgqjmg7PnnIvliLDlhajpg6jku7vliqHvvIzngrnlh7vigJjku7vliqHigJnmjInpkq7jgIInK1xyXG4gICAgICAgICAgICAgICAgJ+aCqOWPr+S7peeCueWHu+WchuWciO+8jOagh+iusOS7u+WKoeS4uuW3suWujOaIkO+8jCcrXHJcbiAgICAgICAgICAgICAgICAn5Lmf5Y+v5Lul572u6aG25oiW5Y+W5raI572u6aG25Lu75Yqh5Yiw5Li76aG16Z2i77yM5Lul5Y+K5Yig6Zmk5Lu75Yqh44CCJytcclxuICAgICAgICAgICAgICAgICfoi6XmgqjmoIforrDmiYDmnInku7vliqHkuLrlt7LlrozmiJDvvIzorqHml7blmajlsIboh6rliqjlgZzmraLvvIFcXG4nK1xyXG4gICAgICAgICAgICAgICAgJyrmnKrlrozmiJDnmoTku7vliqHlsIboh6rliqjlrZjlgqjlnKjnvJPlrZjorrDlvZXkuK3vvIzku6Xkvr/kuo7mgqjlnKjlm57liLDmiJHku6znmoTnvZHpobXml7bph43lm57lt6XkvZzmqKHlvI/jgIInLFxyXG4gICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgIGtvOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgICAnNCc6IHtcclxuICAgICAgICAnaW5zdHJUb3BpYyc6IHtcclxuICAgICAgICAgICAgZW46ICdBYm91dCcsXHJcbiAgICAgICAgICAgIHpoOiAn5YWz5LqOJyxcclxuICAgICAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgICAgICBrbzogJ+qwnOuwnOyekCDshozqsJwnLCAvLyBEZXZlbG9wZXIgSW50cm9cclxuICAgICAgICB9LFxyXG4gICAgICAgICdpbnN0ckNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnUG90YXRvIFRpbWVyIGlzIGhhcHBpbHkgZGV2ZWxvcGVkIGJ5OiBcXG4nLFxyXG4gICAgICAgICAgICB6aDogJ+Wcn+ixhuiuoeaXtuWZqOeUseS7peS4i+aIkOWRmOW8gOWPke+8mlxcbicsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgfSxcclxuICAgICdlbmFibGVBbmltYXRpb24nOiB7XHJcbiAgICAgICAgZW46ICdFbmFibGUgUG90YXRvIEFuaW1hdGlvbicsXHJcbiAgICAgICAgemg6ICflkK/liqjlnJ/osYbnibnmlYgnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJycsXHJcbiAgICB9LFxyXG4gICAgJ2Rpc2FibGVBbmltYXRpb24nOiB7XHJcbiAgICAgICAgZW46ICdEaXNhYmxlIFBvdGF0byBBbmltYXRpb24nLFxyXG4gICAgICAgIHpoOiAn5Y+W5raI5Zyf6LGG54m55pWIJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICdub3RpZmljYXRpb24nOiB7XHJcbiAgICAgICAgJ3dlbGNvbWUnOiB7XHJcbiAgICAgICAgICAgIGVuOiAnV2VsY29tZSBCYWNrIScsXHJcbiAgICAgICAgICAgIHpoOiAn5qyi6L+O5Zue5p2lJyxcclxuICAgICAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgICAgICBrbzogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnbWFyayc6IHtcclxuICAgICAgICAgICAgZW46ICdZb3UgbWFya2VkIGEgdGFzayBhcyBkb25lIScsXHJcbiAgICAgICAgICAgIHpoOiAn5bey5qCH6K6w6K+l5Lu75Yqh5Li65a6M5oiQIScsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3VubWFyayc6IHtcclxuICAgICAgICAgICAgZW46ICdZb3UgbWFya2VkIGEgdGFzayBhcyBpbmNvbXBsZXRlIScsXHJcbiAgICAgICAgICAgIHpoOiAn5bey5qCH6K6w6K+l5Lu75Yqh5Li65pyq5a6M5oiQIScsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2FkZFRhc2snOiB7XHJcbiAgICAgICAgICAgIGVuOiAnQSB0YXNrIGhhcyBiZWVuIGFkZGVkIScsXHJcbiAgICAgICAgICAgIHpoOiAn6K+l5Lu75Yqh5bey5re75YqgIScsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICfqs7zsoJzrpbwg7LaU6rCA7ZaI7Ja0IScsIC8vIEluZm9ybWFsIDopXHJcbiAgICAgICAgICAgIC8vIFVoIO2VmOuLpCAvIOuQmOuLpD9cclxuICAgICAgICB9LFxyXG4gICAgICAgICdwaW5UYXNrJzoge1xyXG4gICAgICAgICAgICBlbjogJ0EgdGFzayBoYXMgYmVlbiBwaW5uZWQhJyxcclxuICAgICAgICAgICAgemg6ICfor6Xku7vliqHlt7LmlL7nva7liLDkuLvpobXpnaIhJyxcclxuICAgICAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgICAgICBrbzogJ+2VgOydhCDstpTqsIDrkJDslrQhJywgLy8gUGluIHdhcyBhZGRlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3VucGluVGFzayc6IHtcclxuICAgICAgICAgICAgZW46ICdBIHRhc2sgaGFzIGJlZW4gdW5waW5uZWQhJyxcclxuICAgICAgICAgICAgemg6ICfor6Xku7vliqHlt7Looqvlj5bmtojnva7pobYhJyxcclxuICAgICAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgICAgICBrbzogJ+2VgOydhCDrupDslrQhJywgLy8gUGluIHdhcyByZW1vdmVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGVsVGFzayc6IHtcclxuICAgICAgICAgICAgZW46ICdBIHRhc2sgaGFzIGJlZW4gZGVsZXRlZCEnLFxyXG4gICAgICAgICAgICB6aDogJ+ivpeS7u+WKoeW3suiiq+WIoOmZpO+8gScsXHJcbiAgICAgICAgICAgIGVzOiAnJyxcclxuICAgICAgICAgICAga286ICfqs7zsoJzrpbwg7IKt7KCc65CQ7Ja0IScsIC8vIOuQmD8/Pz8/Pz8/XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZGVsZXRlQWxsJzoge1xyXG4gICAgICAgICAgICBlbjogJ0FsbCB0YXNrcyBoYXZlIGJlZW4gZGVsZXRlZCEnLFxyXG4gICAgICAgICAgICB6aDogJ+aJgOacieS7u+WKoeW3suiiq+WIoOmZpCEnLFxyXG4gICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgIGtvOiAn6rO87KCc66W8IOuqqOuRkCDsgq3soJzrkJDslrQhJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgICdoZWxwJzogeyAvLyBhcmlhLWxhYmVsPVwiU2hvdyBJbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgIGVuOiAnU2hvdyBJbnN0cnVjdGlvbnMnLFxyXG4gICAgICAgIHpoOiAn5pi+56S65biu5Yqp6I+c5Y2VJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICfshKTrqoXsnYAg67O07JesJyxcclxuICAgIH0sXHJcbiAgICAnaW5zdHJ1Y3Rpb25zJzoge1xyXG4gICAgICAgIGVuOiAnSW5zdHJ1Y3Rpb25zJyxcclxuICAgICAgICB6aDogJ+W4ruWKqeiPnOWNlScsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAn7ISk66qFJyxcclxuICAgIH0sXHJcbiAgICAnc2V0dGluZ3NJY29uJzogeyAvLyBhbHQ9XCJTaG93IFNldHRpbmdzXCJcclxuICAgICAgICBlbjogJ1Nob3cgU2V0dGluZ3MnLFxyXG4gICAgICAgIHpoOiAn5pi+56S66K6+572u6I+c5Y2VJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICfshKTsoJXsnYAg67O07JesJywgLy8gU3ViamVjdCBwYXJ0aWNsZSB1c2VkIGJlY2F1c2UgdGhlc2UgYXJlIHRvcGljcz9cclxuICAgIH0sXHJcbiAgICAnbXV0ZSc6IHsgLy8gTXV0ZSB2b2x1bWVcclxuICAgICAgICBlbjogJ011dGUgdm9sdW1lJywgLy8gYWx0PVwiTXV0ZSB2b2x1bWVcIlxyXG4gICAgICAgIHpoOiAn6Z2Z6Z+zJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICfshozrpqzrpbwg7Iio6riw64ukJywgLy8gQ2hlY2tcclxuICAgIH0sXHJcbiAgICAndW5tdXRlJzoge1xyXG4gICAgICAgIGVuOiAnVW5tdXRlIHZvbHVtZScsXHJcbiAgICAgICAgemg6ICflj5bmtojpnZnpn7MnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJ+yGjOumrOulvCDrk6Pri6QnLCAvLyA/Pz8/Pz9cclxuICAgIH0sXHJcbiAgICAnbm9zY3JpcHQnOiB7XHJcbiAgICAgICAgJ3NhZFBvdGF0byc6IHsgLy8gYWx0PVwiU2FkIFBvdGF0byBpcyBTYWRcIlxyXG4gICAgICAgICAgICBlbjogJ1NhZCBQb3RhdG8gaXMgU2FkJyxcclxuICAgICAgICAgICAgemg6ICflnJ/osYblvojkvKTlv4MnLFxyXG4gICAgICAgICAgICBlczogJycsXHJcbiAgICAgICAgICAgIGtvOiAn7Iqs7ZSIIOqwkOyekCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnanNEaXNhYmxlZCc6IHtcclxuICAgICAgICAgICAgZW46ICdPaCBubyFcXG4nICtcclxuICAgICAgICAgICAgJ1dlXFwncmUgc29ycnksIGJ1dCB0aGlzIHdlYnNpdGUgYXBwbGljYXRpb24gdXNlcyBKYXZhU2NyaXB0IHRvIG9wZXJhdGUgdGhlIHRpbWVyLlxcbicgK1xyXG4gICAgICAgICAgICAnUGxlYXNlIGVuYWJsZSBKYXZhU2NyaXB0IGZvciB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UhJyxcclxuICAgICAgICAgICAgemg6ICflk6bkuI3vvIFcXG4nK1xyXG4gICAgICAgICAgICAn5oqx5q2J77yM5pS5572R56uZ5L2/55SoSmF2YVNjcmlwdOadpei/kOihjOiuoeaXtuWZqOOAglxcbicrXHJcbiAgICAgICAgICAgICfor7flkK/liqhKYXZhU2NyaXB05Lul5Lqr5Y+X5pyA5L2z5L2/55So5oSf5Y+X77yBJyxcclxuICAgICAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgICAgICBrbzogJ+yWtOuouCEgJywgXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgJ21hcmtCdG4nOiB7IC8vIEFSSUEgU2NyZWVuIFJlYWRlciBhcmlhLWxhYmVsPVwiTWFyayBhcyBkb25lXCJcclxuICAgICAgICBlbjogJ01hcmsgYXMgRG9uZScsXHJcbiAgICAgICAgemg6ICfmoIforrDkuLrlt7LlrozmiJAnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJycsXHJcbiAgICB9LFxyXG4gICAgJ3BpbkJ0bic6IHsgLy8gQVJJQSBTY3JlZW4gUmVhZGVyIFxyXG4gICAgICAgIGVuOiAnUGluIHRvIHRoZSBNYWluIERpc3BsYXknLFxyXG4gICAgICAgIHpoOiAn5re75Yqg5Yiw5Li76aG16Z2i5bGV56S6JyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICdkZWxCdG4nOiB7IC8vIEFSSUEgU2NyZWVuIFJlYWRlclxyXG4gICAgICAgIGVuOiAnRGVsZXRlIHRoaXMgVGFzaycsXHJcbiAgICAgICAgemg6ICfliKDpmaTor6Xku7vliqEnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJycsXHJcbiAgICB9LFxyXG4gICAgJ3Rhc2tIZWxwJzoge1xyXG4gICAgICAgIGVuOiAnTWFyayBhIHRhc2sgYXMgY29tcGxldGUuIFBpbiBhIHRhc2sgdG8gdGhlIG1haW4gZGlzcGxheS4nLFxyXG4gICAgICAgIHpoOiAn5qCH6K6w5Lu75Yqh5Li65bey5a6M5oiQ77yM5oiW5re75Yqg5Lu75Yqh5Yiw5Li76aG16Z2i44CCJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICdiYWNrJzoge1xyXG4gICAgICAgIGVuOiAnQmFjaycsXHJcbiAgICAgICAgemg6ICfkuIrkuIDpobUnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJ+uSpOuhnCcsXHJcbiAgICB9LFxyXG4gICAgJ25leHQnOiB7XHJcbiAgICAgICAgZW46ICdOZXh0JyxcclxuICAgICAgICB6aDogJ+S4i+S4gOmhtScsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAn64uk7J2MJyxcclxuICAgIH0sXHJcbiAgICAnc2tpcCc6IHtcclxuICAgICAgICBlbjogJ1NraXAnLFxyXG4gICAgICAgIHpoOiAn6Lez6L+HJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICd0b3AnOiB7XHJcbiAgICAgICAgZW46ICdCYWNrIHRvIFRvcCcsIC8vIEFSSUEgQmFjayB0byB0b3Agb2YgdGhlIHBhZ2VcclxuICAgICAgICB6aDogJ+WbnuWIsOacgOS4iuaWuScsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAnJyxcclxuICAgIH0sXHJcbiAgICAnY29uZ3JhdHNUaXRsZSc6IHtcclxuICAgICAgICBlbjogJ0NvbmdyYXR1bGF0aW9ucyEnLFxyXG4gICAgICAgIHpoOiAn5oGt5ZacJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICdjb25ncmF0czEnOiB7XHJcbiAgICAgICAgZW46ICdJdCB0b29rIHlvdSAnLFxyXG4gICAgICAgIHpoOiAn5L2g6Iqx5LqG5oC75YWxICcsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAnJyxcclxuICAgIH0sXHJcbiAgICAvLyBJdCB0b29rIHlvdSA1IHBvbW9zIHRvIGZpbmlzaCBhbGwgb2YgeW91ciB0YXNrcyFcclxuICAgIC8vIE5vdGUgdGhhdCBjb25ncmF0czEgaXMgdGhlIGZpcnN0IGhhbGYgb2YgdGhlIHZhcmlhYmxlIGFuZCBjb25ncmF0czIgaXMgdGhlIHNlY29uZCBoYWxmXHJcbiAgICAvLyBUaGUgb3JkZXJpbmcgb2YgbGFuZ3VhZ2UgY2FuIGJlIGRpZmZlcmVudCwgc28gaXQncyB1cCB0byB5b3Ugd2hlcmUgdGhlIG51bWJlciBnb2VzXHJcbiAgICAnY29uZ3JhdHMyJzoge1xyXG4gICAgICAgIGVuOiAnIHBvbW90YXRvZXMgdG8gZmluaXNoIGFsbCBvZiB5b3VyIHRhc2tzIScsIFxyXG4gICAgICAgIC8vcG9tb3RhdG9lcyBpbiBFbmdsaXNoLCBwb21vZG9yb3MgaW4gb3RoZXIgbGFuZ3VhZ2VzP1xyXG4gICAgICAgIHpoOiAnIOS4quWcn+ixhuadpeWujOaIkOaJgOacieS7u+WKoScsXHJcbiAgICAgICAgZXM6ICcnLFxyXG4gICAgICAgIGtvOiAnJyxcclxuICAgIH0sXHJcbiAgICAncG90YXRvRGFuY2UnOiB7XHJcbiAgICAgICAgZW46ICdEYW5jaW5nIHBvdGF0bycsXHJcbiAgICAgICAgemg6ICflnJ/osYbot7PoiJ4nLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJ+qwkOyekOqwgCDstpTqs6Ag7J6I7Ja0JyxcclxuICAgIH0sXHJcbiAgICAncG9tb3RhdG8nOiB7XHJcbiAgICAgICAgZW46ICdQb21vdGF0bycsIC8vIFBvdGF0b1xyXG4gICAgICAgIHpoOiAn5ZGo5pyf5Zyf6LGGJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICfqsJDsnpAnLFxyXG4gICAgfSxcclxuICAgICdvcGVuSW5zdHInOiB7XHJcbiAgICAgICAgZW46ICdPcGVuIEluc3RydWN0aW9ucycsXHJcbiAgICAgICAgemg6ICfmiZPlvIDluK7liqnoj5zljZUnLFxyXG4gICAgICAgIGVzOiAnJyxcclxuICAgICAgICBrbzogJycsXHJcbiAgICB9LFxyXG4gICAgJ29wZW5TZXR0aW5ncyc6IHtcclxuICAgICAgICBlbjogJ09wZW4gU2V0dGluZ3MnLFxyXG4gICAgICAgIHpoOiAn5omT5byA6K6+572uJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxuICAgICcnOiB7XHJcbiAgICAgICAgZW46ICcnLFxyXG4gICAgICAgIHpoOiAnJyxcclxuICAgICAgICBlczogJycsXHJcbiAgICAgICAga286ICcnLFxyXG4gICAgfSxcclxufSBcclxuXHJcbi8vIFBvdGF0byBUaW1lciAgICAgICAgICAgICDlnJ/osYborqHml7blmahcclxuLy8gV29yayAgICAgICAgICAgICAgICAgICAgIOS4k+azqFxyXG4vLyBSZXNldCAgICAgICAgICAgICAgICAgICAg6YeN572uXHJcbi8vIFN0YXJ0ICAgICAgICAgICAgICAgICAgICDlvIDlp4tcclxuLy8gU3RvcCAgICAgICAgICAgICAgICAgICAgIOaaguWBnFxyXG4vLyBUYXNrcyAgICAgICAgICAgICAgICAgICAg5Lu75YqhXHJcbi8vIEFkZCAgICAgICAgICAgICAgICAgICAgICDmt7vliqBcclxuLy8gRW50ZXIgVGFzayAgICAgICAgICAgICAgIOi+k+WFpeS7u+WKoVxyXG4vLyBEZWxldGUgQWxsICAgICAgICAgICAgICAg5YWo6YOo5Yig6ZmkXHJcbi8vIENvbmZpcm0gUmVzZXQgLSBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgdGhlIHRpbWVyP1xyXG4vLyDnoa7orqTph43nva4gLSDnoa7lrprmgqjopoHph43nva7ml7bpl7TlkJfvvJ9cclxuLy8gQ29uZmlybSBEZWxldGUgQWxsIC0gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBhbGwgdGFza3M/XHJcbi8vIOehruiupOWFqOmDqOWIoOmZpCAtIOehruWumuaCqOimgeWIoOmZpOaJgOacieeahOS7u+WKoeWQl++8n1xyXG4vLyBTZXR0aW5ncyAgICAgICAgICAgICAgICDorr7nva5cclxuLy8gU2VsZWN0IGEgVGhlbWUgICAgICAgICAg6YCJ5oup5Li76aKYXHJcbi8vIExpZ2h0ICAgICAgICAgICAgICAgICAgIOS6ruiJslxyXG4vLyBEYXJrICAgICAgICAgICAgICAgICAgICDmmpfoibJcclxuLy8gUG90YXRvICAgICAgICAgICAgICAgICAg5Zyf6LGGXHJcbi8vIFdvcmsgVGltZSAgICAgICAgICAgICAgIOS4k+azqOaXtumXtFxyXG4vLyBTaG9ydCBCcmVhayAgICAgICAgICAgICDnn63kvJHmga9cclxuLy8gTG9uZyBCcmVhayAgICAgICAgICAgICAg6ZW/5LyR5oGvXHJcbi8vIFZvbHVtZSAgICAgICAgICAgICAgICAgIOmfs+mHj1xyXG4vLyBDbG9zZSAgICAgICAgICAgICAgICAgICDlhbPpl61cclxuIl19