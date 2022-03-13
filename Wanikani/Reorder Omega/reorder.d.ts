import { SubjectTypeShortString } from './wkof'

export namespace Review {
    type Item = {
        aud: {
            content_type: string
            pronunciation: string
            url: string
            voice_actor_id: number
        }[]
        auxiliary_meanings: string[]
        auxiliary_readings: string[]
        characters: string
        en: string[]
        id: number
        kana: string[]
        kanji: {
            characters: string
            en: string
            id: number
            kan: string
            type: string
        }[]
        slug: string
        srs: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined
        type: 'Vocabulary' | 'Kanji' | 'Radical'
        voc?: string
        kan?: string
        rad?: string
    }

    type DummyItem = { type: string; voc: string; id: 0 }

    type QueueError = {
        table: {
            error: string
            message: string
        }
    }

    type Queue = QueueError | number[]
}

export namespace Settings {
    type SubjectType = 'vocabulary' | 'kanji' | 'radical'

    type Settings = {
        disabled: boolean
        active_preset: number
        active_preset_reviews: number
        active_preset_lessons: number
        active_preset_extra_study: number
        presets: Preset[]
    }

    type Preset = {
        name: string
        active_action: number
        available_on: {
            reviews: boolean
            lessons: boolean
            extra_study: boolean
        }
        actions: Action[]
    }

    type Action = NoAction | FilterAction | SortAction | FreezeAndRestoreAction | ShuffleAction

    type NoAction = {
        name: string
        type: 'none'
    }

    type FreezeAndRestoreAction = {
        name: string
        type: 'freeze & restore'
    }

    type ShuffleAction = {
        name: string
        type: 'shuffle'
    }

    type FilterAction = {
        type: 'filter'
        name: string
        filter: {
            [key: string]: any
            filter: string
            invert: boolean
        }
    }

    type SortAction = {
        name: string
        type: 'sort'
        sort: {
            [key: string]: any
            sort: 'level' | 'srs' | 'leech' | 'overdue' | 'type'
        }
    }
}
