// <copyright file="UserRepository.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Data.SqlServer
{
    using System;

    using Acme.Productivity.Pomodoro.Core;

    public class UserRepository: IUserRepository
    {
        public AuthenticatedUser Authenticate(string userName, string password)
        {
            return new AuthenticatedUser
            {
                Id = Guid.NewGuid(),
                Name = userName
            };
        }
    }
}