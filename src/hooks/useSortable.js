import { useEffect} from "react";
import Sortable from "sortablejs";


export const useSortable = (listRef, onEndCallBack) => {
    useEffect(() => {
        if (listRef.current){
            const sortable = Sortable.create(listRef.current, 
                {
                scroll: true,
                scrollSensitivity: 20,
                scrollSpeed: 2,
                animation: 800,
                easing: "cubic-bezier(0.65, 0, 0.35, 1)",
                forceFallback: true,
                fallbackOnBody: false,
                onEnd(e) {
                    if(onEndCallBack) {
                        onEndCallBack(e.oldIndex, e.newIndex);
                    }
                },
            });

            return () => {
                sortable.destroy();
            }
        }
    }, [listRef, onEndCallBack])

}