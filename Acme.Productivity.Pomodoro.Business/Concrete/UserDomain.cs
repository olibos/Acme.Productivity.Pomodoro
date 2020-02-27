// <copyright file="UserDomain.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Business.Concrete
{
    using System;
    using System.Diagnostics.CodeAnalysis;
    using System.Linq;
    using System.Threading.Tasks;

    using Acme.Productivity.Pomodoro.Core;
    using Acme.Productivity.Pomodoro.Data;

    /// <summary>
    /// Manage all information about the user.
    /// </summary>
    public class UserDomain : IUserDomain
    {
        private readonly IUserRepository _userRepository;

        /// <summary>
        /// Creates a new instance of the user repository.
        /// </summary>
        /// <param name="userRepository"></param>
        public UserDomain(IUserRepository userRepository)
        {
            this._userRepository = userRepository;
        }

        /// <inheritdoc />
        public async Task<AuthenticatedUser> AuthenticateAsync([NotNull]UserAuthentication authentication)
        {
            return await this._userRepository.AuthenticateAsync(authentication.UserName, authentication.Password);
        }
    }
}