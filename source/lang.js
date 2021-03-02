var dict = {
    'title': {
        en: 'Potato Timer',
        cn: '土豆计时器',
        es: 'Spanish',
        kr: '포테이토 타이머'
    },
    'phase': {
        'work': {
            en: 'work',
            cn: '专注',
            es: '',
            kr: '일하기',
        },
        'short break': {
            en: 'short break',
            cn: '短休息',
            es: '',
            kr: '짧은 휴식기간',
        }, 
        'long break': {
            en: 'long break',
            cn: '长休息',
            es: '',
            kr: '긴 휴식기간',
        },
        'stopped': {
            en: 'stopped',
            cn: '已停止',
            es: '',
            kr: '중지하기',
        },
        'idle': {
            en: 'idle',
            cn: '空闲',
            es: '',
            kr: '놀고 있기',
        },
    },
    'reset': {
        en: 'Reset',
        cn: '重置',
        es: '',
        kr: '재설정',
    },
    'start': {
        en: 'Start',
        cn: '开始',
        es: '',
        kr: '시작',
    },
    'stop': {
        en: 'Stop',
        cn: '暂停',
        es: '',
        kr: '멈춤',
    },
    'tasks': {
        en: 'Tasks',
        cn: '任务',
        es: '',
        kr: '과제들',
    },
    'add': {
        en: 'Add',
        cn: '+',
        es: '+',
        kr: '추가',
    },
    'enterTask': {
        en: 'Enter a Task To Start',
        cn: '',
        es: '',
        kr: '',
    },
    'deleteAll': {
        en: 'Delete All',
        cn: '全部删除',
        es: '',
        kr: '모두 삭제하기', //삭제
    },
    'close': {
        en: 'Close',
        cn: '关闭',
        es: '',
        kr: '닫기',
    },
    'settings': {
        en: 'Settings',
        cn: '设置',
        es: '',
        kr: '설정',
    },
    'selectTheme': {
        en: 'Select a Theme',
        cn: '选择主题',
        es: '',
        kr: '테마 고르기',
    },
    'lightTheme': {
        en: 'Light',
        cn: '亮色',
        es: '',
        kr: '밝은',
    },
    'darkTheme': {
        en: 'Dark',
        cn: '暗色',
        es: '',
        kr: '어두운',
    },
    'potatoTheme': {
        en: 'Potato',
        cn: '土豆',
        es: '',
        kr: '감자',
    },
    'workTime': {
        en: 'Work Time',
        cn: '专注时间',
        es: '',
        kr: '일하는 시간', // 일하기 시간?
    },
    'shortBreak': {
        en: 'Short Break',
        cn: '短休息',
        es: '',
        kr: '짧은 휴식',
    },
    'longBreak': {
        en: 'Long Break',
        cn: '长休息',
        es: '',
        kr: '긴 휴식',
    },
    'volume': {
        en: 'Volume',
        cn: '音量',
        es: '',
        kr: '소리',
    },
    'confirmReset': {
        en: 'Are you sure you want to reset the timer\'s cycle?',
        cn: '确定您要重置时间吗？',
        es: '',
        kr: '확인 - 재설정을 원하십니까?',
    },
    'confirmDeleteAll': {
        en: 'Are you sure you want to delete all tasks?',
        cn: '确定您要删除所有的任务吗？',
        es: '',
        kr: '확인 - 삭제를 원하십니까?',
    },
    'confirm': {
        en: 'Confirm',
        cn: '确认',
        es: '',
        kr: '확인하기',
    },
    'cancel': {
        en: 'Cancel',
        cn: '取消',
        es: '',
        kr: '취소하기',
    },
    '': {
        en: '',
        cn: '',
        es: '',
        kr: '',
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
