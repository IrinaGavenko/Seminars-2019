from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        # что нужно получать при запросе
        fields = ('username',)


class UserTokenSerializer(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    # password должен сохраняться, но не отправляться с
    # ответом обратно пользователю -- только для записи
    password = serializers.CharField(write_only=True)

    # обрабатывает создание нового токена
    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    # как объект будет храниться в БД
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        # что нужно получать при запросе
        fields = ('token', 'username', 'password')
