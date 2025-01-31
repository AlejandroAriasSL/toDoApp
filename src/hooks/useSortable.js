import { useEffect} from "react";
import Sortable from "sortablejs";

export const useSortable = (listRef, onEndCallBack) => {
    useEffect(() => {
        if (listRef.current){
            const sortable = Sortable.create(listRef.current, {
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