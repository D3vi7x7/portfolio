#include <stdio.h>

int main() {
    // Write C code here
    int a[10],large,small;
    int i,s;
    printf("ENTER THE SIZE OF THE ARRAY : ");
    scanf("%d",&s);
    printf("ENTER THE ELEMENTS :");
    for(i= 0;i<s;i++)
    {
        scanf("%d",&a[i]);
    }
    large = a[0];
    small = a[0];
    for(i = 0;i<s;i++)
    {
        if(a[i]>large)
        {
            large = a[i];
        }
        if(a[i]<small)
        {
            small = a[i];
        }
    }
    
    printf("LARGEST : %d",large);
    printf("SMALLEST : %d",small);
    return 0;
}