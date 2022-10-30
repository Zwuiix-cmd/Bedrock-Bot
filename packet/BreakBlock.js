module.exports = {
    create(client, x, y, z)
    {
        client.queue('player_auth_input', {
            pitch: 0,
            yaw: 0,
            position: { x: x, y: y, z: z },
            move_vector: { x: 0, z: 0 },
            head_yaw: 0,
            input_data: {
                _value: 0n,
                ascend: false,
                descend: false,
                north_jump: false,
                jump_down: false,
                sprint_down: false,
                change_height: false,
                jumping: false,
                auto_jumping_in_water: false,
                sneaking: false,
                sneak_down: false,
                up: false,
                down: false,
                left: false,
                right: false,
                up_left: false,
                up_right: false,
                want_up: false,
                want_down: false,
                want_down_slow: false,
                want_up_slow: false,
                sprinting: false,
                ascend_block: false,
                descend_block: false,
                sneak_toggle_down: false,
                persist_sneak: false,
                start_sprinting: false,
                stop_sprinting: false,
                start_sneaking: false,
                stop_sneaking: false,
                start_swimming: false,
                stop_swimming: false,
                start_jumping: false,
                start_gliding: false,
                stop_gliding: false,
                item_interact: false,
                block_action: true,
                item_stack_request: false
            },
            input_mode: 'mouse',
            play_mode: 'screen',
            interaction_model: 'crosshair',
            gaze_direction: undefined,
            tick: 1159n,
            delta: { x: 0, y: -0.07840000092983246, z: 0 },
            transaction: {
                legacy: { legacy_request_id: 0, legacy_transactions: undefined },
                actions: [],
                data: {
                    action_type: 'break_block',
                    block_position: { x: x, y: y, z: z },
                    face: 6,
                    hotbar_slot: 0,
                    held_item: {
                        network_id: 0,
                        count: 1,
                        metadata: 0,
                        has_stack_id: 0,
                        stack_id: undefined,
                        block_runtime_id: 0,
                        extra: [Object]
                    },
                    player_pos: {
                        x: x,
                        y: y,
                        z: z
                    },
                    click_pos: { x: 0, y: 0, z: 0 },
                    block_runtime_id: 0
                }
            },
            item_stack_request: undefined,
            block_action: [
                {
                    action: 'start_break',
                    position: { x: x, y: y, z: z },
                    face: 4
                },
                { action: 'stop_break', position: undefined, face: undefined },
                {
                    action: 'crack_break',
                    position: { x: x, y: y, z: z },
                    face: 4
                }
            ]
        });

    }
};