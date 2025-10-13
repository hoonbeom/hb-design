import { Children, Fragment, isValidElement, type PropsWithChildren } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib/util';

import { typography } from '../lib/variants';

type TypographyProps = PropsWithChildren<{ variant: keyof typeof typography; asChild?: boolean; className?: string }>;

/**
 * Typography 컴포넌트
 *
 * 텍스트 스타일링을 위한 재사용 가능한 컴포넌트입니다.
 * 다양한 variant를 통해 일관된 타이포그래피 스타일을 적용할 수 있습니다.
 *
 * @param variant - 적용할 타이포그래피 스타일 variant
 * @param asChild - true일 경우 Slot을 사용하여 자식 요소에 스타일을 적용
 * @param className - 추가 CSS 클래스명
 * @param children - 렌더링할 자식 요소들
 */
export const Typography = ({ children, variant, asChild, className }: TypographyProps) => {
    // asChild가 true면 Slot을 사용하고, false면 div를 사용
    const Comp = asChild ? Slot : 'div';

    // asChild prop이 사용된 경우 유효성 검사
    if (asChild) {
        const childrenArray = Children.toArray(children);
        const child = childrenArray[0];

        // asChild 사용 시 정확히 하나의 유효한 React 요소가 필요
        if (childrenArray.length !== 1 || !isValidElement(child) || child.type === Fragment) {
            console.error('Typography with asChild prop must have exactly one child element');
            return null;
        }
    }

    return <Comp className={cn(typography[variant], className)}>{children}</Comp>;
};
