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
        ko: '',
    },
    'deleteAll': {
        en: 'Delete All',
        zh: '全部删除',
        es: 'Borrar Todo',
        ko: '모두 삭제하기', //삭제
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
    'cycleLength': {
        en: 'Length of a Cycle',
        zh: '',
        es: '',
        ko: '',
    },
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
    'languageBtn': {
        en: 'Language',
        zh: '语言',
        es: 'Idioma',
        ko: '언어',
    },
    '': {
        en: '',
        zh: '',
        es: '',
        ko: '',
    },
} 

function setLang(selectedLang) {
    window.localStorage.setItem('lang', selectedLang);
    window.location.reload();
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
