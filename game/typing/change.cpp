#include<bits/stdc++.h>
using namespace std;

int cnt=0;

int main(){
	freopen("in.txt","r",stdin);
	freopen("out.txt","w",stdout);
	int t;
	printf("var words=[");
	while(scanf("%d",&t)!=EOF){
		string str;
		cin>>str;
		bool flag=false;
		for(int i=0;i<str.size();i++) if(!isalpha(str[i])){flag=true;break;}
		if(flag || str.size()>10 || str.size()<5) continue;
		cnt++;
		printf("\"%s\",",str.c_str());
		getline(cin,str);
	}
	puts("];");
	puts("\n\n\n\n");
	printf("%d\n",cnt);
	return 0;
}
